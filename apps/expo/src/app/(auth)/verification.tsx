import * as React from "react";
import { Text } from "react-native";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { isEmailLinkError, useClerk } from "@clerk/clerk-expo";

// Handle email link verification results. This is
// the final step in the email link flow.
export default function EmailLinkVerificationPage() {
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = React.useState("loading");

  const { handleEmailLinkVerification } = useClerk();

  React.useEffect(() => {
    async function verify() {
      try {
        await handleEmailLinkVerification({
          redirectUrl: Linking.createURL("/protected"),
          redirectUrlComplete: Linking.createURL("/protected"),
          onVerifiedOnOtherDevice: () => {
            setVerificationStatus("verified");

            router.replace("/protected");
          },
        });

        // If we're not redirected at this point, it means
        // that the flow has completed on another device.
        setVerificationStatus("verified");
      } catch (err) {
        console.error(err);
        // Verification has failed.
        let status = "failed";

        if (isEmailLinkError(err) && err.code === "expired") {
          status = "expired";
        }

        setVerificationStatus(status);
      }
    }

    verify();
  }, []);

  if (verificationStatus === "loading") {
    return <Text>Loading...</Text>;
  }

  if (verificationStatus === "failed") {
    return <Text>Email link verification failed</Text>;
  }

  if (verificationStatus === "expired") {
    return <Text>Email link expired</Text>;
  }

  return (
    <Text>Successfully signed in. Return to the original tab to continue.</Text>
  );
}
