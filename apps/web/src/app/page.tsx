import {
  ChevronDownIcon,
  ChevronRightIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-10">
      <section className="h-[90vh]">
        <div className="py-20 px-4 space-y-8 max-w-3xl lg:px-10">
          <div className="relative mb-10 max-w-[10rem]">
            <Image
              src="/logo.png"
              alt="Gard'n"
              width={100}
              height={100}
              className="w-full h-full object-fit aspect-auto"
            />
          </div>
          <h1 className="text-3xl font-bold uppercase lg:text-5xl">
            Plantez le jardin qui vous ressemble
          </h1>

          <p className="text-secondary">
            Êtes-vous fatigué de voir vos plantes dépérir malgré tous vos
            efforts ? Ne vous inquiétez plus, Gard&apos;n est votre allié vert
            pour un jardinage facile et réussi ! Découvrez nos outils
            révolutionnaires pour avoir le jardin potager à l&apos;image de
            votre terre.
          </p>

          <p className="text-secondary">
            Gard&apos;N est un outil révolutionnaire conçu spécialement pour
            vous aider à faire pousser des plantes avec facilité, même si vous
            n&apos;avez pas la main verte. Plus besoin de deviner quelles
            plantes conviennent le mieux à votre type de sol ! On vous indique
            exactement ce que vous pouvez planter en fonction de la composition
            de votre terre.
          </p>

          <p className="text-secondary">
            Que vous soyez novice en jardinage ou un passionné expérimenté,
            Gard&apos;N est fait pour vous.
          </p>

          <Link
            href="#"
            className="flex flex-row gap-4 items-center py-1 px-4 max-w-max text-lg font-bold text-white rounded-full bg-primary"
          >
            <span>
              Je découvre l&apos;application
            </span>{" "}
            <ChevronRightIcon height={30} width={30} />
          </Link>
        </div>
      </section>

      <div className="flex justify-center items-center mx-auto w-10 h-10 rounded-full border">
        <ChevronDownIcon height={30} width={30} />
      </div>

      <section className="container px-4 pb-10 mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center uppercase">
          Pourquoi nous choisir ?
        </h2>

        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-3">
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">
              Simplicite d&apos;utilisation
            </h3>
            <p className="mx-auto max-w-xs text-secondary text-balance">
              Êtes-vous fatigué de voir vos plantes dépérir malgré tous vos
              efforts ? Ne vous inquiétez plus, Gard&apos;n est votre allié vert
              pour un jardinage facile et réussi !
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-semibold">
              Personnalisez votre sol
            </h3>
            <p className="mx-auto max-w-xs text-secondary text-balance">
              Ne perdez plus de temps à deviner quelles plantes conviennent à
              votre terrain. GreenPot analyse la composition de votre sol pour
              vous recommander les meilleures options.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-semibold">
              Economisez temps et energie
            </h3>{" "}
            <p className="mx-auto max-w-xs text-secondary text-balance">
              Fini les essais infructueux ! GreenPot vous assure des résultats
              satisfaisants, vous permettant de créer un jardin luxuriant sans
              tracas.
            </p>
          </div>
        </div>
      </section>

      <footer className="flex justify-between items-center py-6 px-8 shadow-[0_-10px_15px_-3px_rgb(0_0_0/0.1),0_-4px_6px_-4px_rgb(0_0_0/0.1)]">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Gard'n"
            width={100}
            height={100}
            className="w-full h-full object-fit aspect-auto"
          />
        </div>

        <div className="flex gap-4 items-center">
          <TwitterLogoIcon height={30} width={30} />
          <InstagramLogoIcon height={30} width={30} />
          <LinkedInLogoIcon height={30} width={30} />
        </div>
      </footer>
    </main>
  );
}
