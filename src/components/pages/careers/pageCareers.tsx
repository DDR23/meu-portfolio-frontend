import { careersMock } from "@/mocks/careers.mock";
import themeDevices from "@/styles/themeDevices";
import { formatDate } from "@/utils/formatDate";
import { Accordion, Avatar, Card, Flex, Group, Highlight, Stack, Text } from "@mantine/core";
import { IconArrowDownLeft, IconBriefcaseFilled } from "@tabler/icons-react";
import { useState } from "react";

export default function PageCareers() {
  const { isMobile } = themeDevices();
  const [openedItem, setOpenedItem] = useState<string | null>(careersMock[0]?.id || null);

  const careers = careersMock.map((career, index) => (
    <Accordion.Item
      value={career.id}
      key={index}
      onMouseEnter={() => setOpenedItem(career.id)}
      onMouseLeave={() => setOpenedItem(careersMock[0]?.id)}
    >
      <Accordion.Control pos={"relative"}>
        <Stack gap={"xs"} pt={openedItem === career.id ? (isMobile ? "" : "lg") : ""} style={{
          transition: "0.4s ease",
        }}>
          <Flex gap={"md"} align={"center"}>
            <Avatar
              src={career.CAREER_COMPANY_LOGO && career.CAREER_COMPANY_LOGO}
              size={"50"} radius={"sm"}>
              {!career.CAREER_COMPANY_LOGO && <IconBriefcaseFilled color="#DAFF01" />}
            </Avatar>
            <Stack gap={"4"}>
              <Text fw={"bold"} fz={"lg"} c={"defaultColor"} inline style={{
                textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
              }}>{career.CAREER_NAME}</Text>
              <Text fw={"bold"} inline style={{
                textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
              }}>{career.CAREER_COMPANY}</Text>
              {
                career.CAREER_START_DATE
                && (
                  <Stack gap={"4"}>
                    <Group gap={"6"}>
                      <Text fz={"xs"} c={"dimmed"} inline>{formatDate(career.CAREER_START_DATE)}</Text>
                      <Text fz={"xs"} c={"dimmed"} inline>-</Text>
                      <Text fz={"xs"} c={"dimmed"} inline>{career.CAREER_END_DATE ? formatDate(career.CAREER_END_DATE) : "o momento"}</Text>
                    </Group>
                  </Stack>
                )
              }
            </Stack>
          </Flex>
        </Stack>
        <Stack pos={"absolute"} right={"10px"} top={"10px"}>
          <IconArrowDownLeft size={"28"} color="grey" style={{
            rotate: openedItem === career.id ? "180deg" : "0deg",
            transition: "0.4s ease",
          }} />
        </Stack>
      </Accordion.Control>
      <Accordion.Panel>
        <Stack px={"sm"} pb={openedItem === career.id ? (isMobile ? "" : "lg") : ""} style={{
          transition: "0.4s ease",
        }}>
          <Text fz={"sm"} inline>
            {career.CAREER_DESCRIPTION}
          </Text>
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Flex className="panel" id="sobre-mim" h={"100vh"} justify={"center"} align={"center"} style={{
        scrollSnapAlign: "start",
      }}>
        <Stack h={"90vh"} w={"70rem"} maw={"90vw"} align={"center"}>
          <Stack>
            <Highlight
              highlight={[
                "qualidade",
                "performance",
                "design",
                "experiência",
              ]}
              highlightStyles={{
                color: "#DAFF01",
                WebkitBackgroundClip: 'text',
              }}
              ta={"center"}
              fw={"bold"}
              fz={isMobile ? "3vh" : "5vh"}
              inline
              style={{
                textShadow: "-2px 2px 1px rgba(89, 112, 8, 0.50)",
              }}>
              Há 2 anos desenvolvendo aplicações web sob medida para empresas e negócios independentes, criando soluções reais que unem qualidade, alta performance, design elegante e uma experiência do usuário marcante
            </Highlight>
          </Stack>
          <Stack flex={"1"} justify={"center"} w={"60rem"} maw={"90vw"}>
            <Card p={"0"} radius={"md"} style={{
              backdropFilter: "blur(100px)",
              background: "#23232350",
            }}>
              <Accordion
                value={openedItem}
                variant={"contained"}
                transitionDuration={400}
                chevron={false}
              >
                {careers}
              </Accordion>
            </Card>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
