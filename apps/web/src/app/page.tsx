import Image from "next/image";
import Link from "next/link";
import {
  ChevronRightIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Page() {
  return (
    <main className="space-y-10">
      <section className="relative md:h-screen">
        <div className="absolute bottom-0 left-0 -z-50 hidden h-1/2 w-full md:block md:h-full lg:h-full">
          <Image
            src="/home.png"
            alt="Gard'n champ"
            width={1920}
            height={1080}
            className="aspect-auto h-full w-full object-cover opacity-90"
          />
        </div>
        <div className="max-w-3xl space-y-8 py-4 lg:py-10">
          <div className="relative mb-10 max-w-[10rem] lg:ml-8">
            <Image
              src="/logo.png"
              alt="Gard'n"
              width={100}
              height={100}
              className="object-fit aspect-auto h-full w-full"
            />
          </div>
          <div className="space-y-8 px-4 lg:px-10">
            <h1 className="text-3xl font-bold uppercase lg:text-5xl">
              Plantez le jardin qui vous ressemble
            </h1>

            <p className="text-balance md:w-2/3">
              Êtes-vous fatigué de voir vos plantes dépérir malgré tous vos
              efforts ? Ne vous inquiétez plus, Gard&apos;n est votre allié vert
              pour un jardinage facile et réussi ! Découvrez nos outils
              révolutionnaires pour avoir le jardin potager à l&apos;image de
              votre terre.
            </p>

            <p className="text-balance md:w-2/3">
              Gard&apos;N est un outil révolutionnaire conçu spécialement pour
              vous aider à faire pousser des plantes avec facilité, même si vous
              n&apos;avez pas la main verte. Plus besoin de deviner quelles
              plantes conviennent le mieux à votre type de sol ! On vous indique
              exactement ce que vous pouvez planter en fonction de la
              composition de votre terre.
            </p>

            <p className="text-balance md:w-2/3">
              Que vous soyez novice en jardinage ou un passionné expérimenté,
              Gard&apos;N est fait pour vous.
            </p>
          </div>

          <div className="relative h-full">
            <Image
              src="/home.png"
              alt="Gard'n champ"
              width={1920}
              height={1080}
              className="aspect-auto h-full w-full object-cover md:hidden"
            />
            <Link
              href="#"
              className="absolute bottom-4 left-4 flex max-w-max flex-row items-center gap-4 rounded-full bg-primary px-4 py-1 font-bold text-white md:relative md:bottom-0 md:left-10 lg:relative lg:text-lg"
            >
              <span>Je découvre l&apos;application</span>{" "}
              <ChevronRightIcon height={28} width={28} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-10 px-4 py-10">
        <h2 className="text-center text-3xl font-bold uppercase">
          Pourquoi nous choisir ?
        </h2>

        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-3">
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">
              Simplicite d&apos;utilisation
            </h3>
            <p className="mx-auto max-w-xs text-balance text-secondary">
              Êtes-vous fatigué de voir vos plantes dépérir malgré tous vos
              efforts ? Ne vous inquiétez plus, Gard&apos;n est votre allié vert
              pour un jardinage facile et réussi !
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Personnalisez votre sol</h3>
            <p className="mx-auto max-w-xs text-balance text-secondary">
              Ne perdez plus de temps à deviner quelles plantes conviennent à
              votre terrain. GreenPot analyse la composition de votre sol pour
              vous recommander les meilleures options.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-semibold">
              Economisez temps et energie
            </h3>{" "}
            <p className="mx-auto max-w-xs text-balance text-secondary">
              Fini les essais infructueux ! GreenPot vous assure des résultats
              satisfaisants, vous permettant de créer un jardin luxuriant sans
              tracas.
            </p>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-between px-8 py-6 shadow-[0_-10px_15px_-3px_rgb(0_0_0/0.1),0_-4px_6px_-4px_rgb(0_0_0/0.1)]">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Gard'n"
            width={100}
            height={100}
            className="object-fit aspect-auto h-full w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <TwitterLogoIcon height={30} width={30} />
          <InstagramLogoIcon height={30} width={30} />
          <LinkedInLogoIcon height={30} width={30} />
        </div>
      </footer>
    </main>
  );
}
