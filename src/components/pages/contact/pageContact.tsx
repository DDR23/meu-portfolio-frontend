import themeDevices from "@/styles/themeDevices";
import { Avatar, BackgroundImage, Flex, Group, Paper, Stack, Text, Title } from "@mantine/core";
import SocialButtons from "@/components/_ui/socialButtons/socialButtons";
import ContactForm from "./form/contactForm";
import { useScrambledText } from "@/utils/useScrambledText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const works = ["oxdrtech", "André Campos"];

interface Props {
  triggerGSAP: boolean;
}

export default function PageContact({ triggerGSAP }: Props) {
  const { isMobile } = themeDevices();
  const displayText = useScrambledText(works);
  const gsapRef = useRef(null);

  useGSAP(() => {
    if (triggerGSAP) {
      gsap.set(".containerContact", {
        display: "flex",
        yPercent: 100,
        opacity: 0,
      });
      gsap.set(".objectContact", {
        display: "flex",
        yPercent: 100,
        opacity: 0,
      });

      gsap.timeline()
        .to(".containerContact", {
          delay: .1,
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
        })
        .to(".objectContact", {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
        });
    } else {
      gsap.to(".containerContact", {
        opacity: 0,
        duration: 0.25,
        display: "none",
      });
    }
  }, [triggerGSAP]);

  return (
    <>
      <Flex ref={gsapRef} w={"100vw"} h={"100vh"} justify={"center"} direction={"column"} style={{
        scrollSnapAlign: "start",
      }}>
        <Flex className={"containerContact"} display={"none"} m={"56 10 10 10"} flex={"1"} style={{
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          <BackgroundImage src={"./backgroundGrain.webp"}>
            <Stack h={"100%"} p={"lg"} align={"center"} justify={"flex-end"} gap={isMobile ? "lg" : "xl"} pb={"56"}>
              <Group component={"span"} gap={"sm"} style={{
                overflow: "hidden",
              }}>
                <Stack className={"objectContact"} display={"none"} w={isMobile ? "90vw" : "80vw"}>
                  <Title order={1} fz={isMobile ? "h2" : ""} style={{
                    textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
                  }}>
                    Disponível para oportunidades freelance selecionadas
                  </Title>
                </Stack>
              </Group>
              <Paper className={"objectContact"} display={"none"} w={isMobile ? "90vw" : "80vw"} h={1} bg={"#C9C9C9"} />
              <ContactForm />
              <Group component={"span"} gap={"sm"} style={{
                overflow: "hidden",
              }}>
                <Stack className={"objectContact"} display={"none"} w={"80vw"} align={"center"} ta={"center"} mt={"md"} gap={"xs"}>
                  <Avatar src={"https://avatars.githubusercontent.com/u/83263335?v=4"} size={"50"} />
                  <Stack align={"center"} gap={"0"}>
                    <SocialButtons />
                    <Text ff={"monospace"} fz={"xs"}>
                      Desenvolvido por {" "}
                      <Text fz={"xs"} component={"a"} href={"https://github.com/oxdrtech"} target={"_blank"} c={"defaultColor"}>{displayText}</Text>
                    </Text>
                    <Text ff={"monospace"} fz={"10"} c={"dimmed"}>© {new Date().getFullYear()} OXDRTECH. Todos os direitos reservados.</Text>
                  </Stack>
                </Stack>
              </Group>
            </Stack>
          </BackgroundImage>
        </Flex>
      </Flex>
    </>
  );
}
