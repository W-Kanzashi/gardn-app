import * as React from "react";
import { Button, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_link",
        redirectUrl: Linking.createURL("/protected/"),
      });

      setPendingVerification(true);
    } catch (err: unknown) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: unknown) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1">
        {!pendingVerification && (
          <>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
            />
            <Button title="Sign Up" onPress={onSignUpPress} />
          </>
        )}
        {pendingVerification && (
          <>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
            <Button title="Verify Email" onPress={onPressVerify} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
