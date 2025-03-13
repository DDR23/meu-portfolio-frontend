import themeDevices from "@/styles/themeDevices";
import { Badge, Flex, Group, Highlight, Image, List, Paper, Stack, Title } from "@mantine/core";
import { iconTechs } from "@/mocks/iconTechs.mock";
import classes from "./pageSkill.module.css";

interface Props {
  triggerGSAP: boolean;
}

export default function PageSkills({ triggerGSAP }: Props) {
  const { isMobile, isDesktop } = themeDevices();

  const animationTechs = iconTechs.map((icon, index) => (
    <li key={index}>
      <Image src={icon.src} alt="techs" />
    </li>
  ))

  return (
    <>
      <Flex w={"100vw"} h={"100vh"} justify={"center"} direction={"column"} style={{
        scrollSnapAlign: "start",
      }}>
        <Flex m={"56 10 10 10"} pos={"relative"} flex={"1"} justify={"center"} bg={"#11111150"} style={{
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          <List classNames={classes}>
            {animationTechs}
          </List>
          <Stack h={"100%"} px={"lg"} align={"center"} justify={isDesktop ? "flex-end" : "center"} pb={isDesktop ? "80" : ""} gap={isMobile ? "lg" : "xl"} style={{
            backdropFilter: "blur(1px)",
          }}>
            <Stack w={isMobile ? "90vw" : "80vw"} gap={"lg"}>
              <Group gap={"xs"}>
                <Badge variant={"outline"}>Front-end</Badge>
                <Badge variant={"outline"}>Back-end</Badge>
              </Group>
              <Highlight
                highlight={[
                  "modernas",
                  "sólida",
                  "evolução",
                ]}
                highlightStyles={{
                  color: "#DAFF01",
                  WebkitBackgroundClip: 'text',
                }}
                fz={isMobile ? "h2" : "h1"}
                fw={"lighter"}
                inline
                style={{
                  textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
                }}
              >
                Com ferramentas modernas, cada projeto ganha uma base sólida, preparada para uma evolução contínua
              </Highlight>
            </Stack>
            <Paper w={isMobile ? "90vw" : "80vw"} h={1} bg={"defaultColor"} />
            <Stack w={isMobile ? "90vw" : "80vw"} gap={"0"} ta={"end"}>
              <Title order={2} fz={isMobile ? "h3" : ""} style={{
                textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
              }}>
                Criando soluções reais
              </Title>
              <Title order={2} fz={isMobile ? "h3" : ""} style={{
                textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
              }}>
                que impactam
              </Title>
              <Title order={2} fz={isMobile ? "h3" : ""} style={{
                textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
              }}>
                os negócios
              </Title>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
