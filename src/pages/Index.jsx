import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import flamingoImage from "../../public/placeholder.svg";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <AspectRatio ratio={16 / 9}>
          <img src={flamingoImage} alt="Flamingos" className="object-cover w-full h-full" />
        </AspectRatio>
        <h1 className="text-4xl font-bold">Discover the World of Flamingos</h1>
        <p className="text-lg">Learn about the fascinating lives of these beautiful birds.</p>
      </section>

      <Separator />

      {/* About Flamingos */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">About Flamingos</h2>
        <p>
          Flamingos are large birds known for their bright pink feathers, long legs, and distinctive downward-bending beaks. They are found in warm, watery regions on many continents.
        </p>
        <p>
          These social birds live in colonies that can number in the thousands. They thrive in environments like estuaries and saline or alkaline lakes.
        </p>
        <AspectRatio ratio={16 / 9}>
          <img src={flamingoImage} alt="Flamingos in habitat" className="object-cover w-full h-full" />
        </AspectRatio>
      </section>

      <Separator />

      {/* Flamingo Species */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Flamingo Species</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Greater Flamingo", "Lesser Flamingo", "Chilean Flamingo", "Andean Flamingo", "James's Flamingo", "American Flamingo"].map((species) => (
            <Card key={species}>
              <CardHeader>
                <CardTitle>{species}</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={4 / 3}>
                  <img src={flamingoImage} alt={species} className="object-cover w-full h-full" />
                </AspectRatio>
                <p className="mt-2">Brief description about {species}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Conservation Efforts */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Conservation Efforts</h2>
        <p>
          Flamingo conservation is crucial to protect these beautiful birds and their habitats. Various organizations are working tirelessly to ensure the survival of flamingos through habitat preservation, research, and public education.
        </p>
        <AspectRatio ratio={16 / 9}>
          <img src={flamingoImage} alt="Conservation efforts" className="object-cover w-full h-full" />
        </AspectRatio>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="text-center space-y-2">
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4">
          <Button variant="link">Facebook</Button>
          <Button variant="link">Twitter</Button>
          <Button variant="link">Instagram</Button>
        </div>
        <p>Contact us at: info@flamingoworld.com</p>
      </footer>
    </div>
  );
};

export default Index;