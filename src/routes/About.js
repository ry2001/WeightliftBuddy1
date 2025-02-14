import React from "react"
import { Container, Text, Center, Title, Stack, UnstyledButton, Group,  } from "@mantine/core";
import { ChevronRight } from 'tabler-icons-react';
import styles from './styles.module.css';

function About() {
    return (
        <>
            <div>
                <Container 
                    style={{marginTop:100}}
                >
                </Container>

                <Center>
                    <Stack 
                        justify="space-around" 
                        sx={() => ({ height: 300 })}
                        style={{marginTop:50}}
                        >
                        <UnstyledButton 
                            style={{width: '100%'}} 
                            onClick={() => console.log('Go to Terms of Service page')}
                            className={styles.IndividualSettingsContainer}
                        >
                            <Group position="apart">
                                <Text size="xl" weight='bold'>Terms of Service</Text>
                                <ChevronRight 
                                    size={48}
                                    strokeWidth={2}
                                />
                            </Group>
                        </UnstyledButton>
            
                        <UnstyledButton 
                            style={{width: '100%'}} 
                            onClick={() => console.log('Go to Privacy Policy page')}
                            className={styles.IndividualSettingsContainer}
                        >
                            <Group position="apart">
                                <Text size="xl" weight='bold'>Privacy Policy</Text>
                                <ChevronRight 
                                    size={48}
                                    strokeWidth={2}
                                />
                            </Group>
                        </UnstyledButton>

                        <Group position="apart" >
                            <Text size="xl" weight='bold'>Version 1.23</Text>
                        </Group>

                        <UnstyledButton 
                            style={{width: '100%'}} 
                            onClick={() => console.log('Go to About app page')}
                            className={styles.IndividualSettingsContainer}
                        >
                            <Group position="apart">
                                <Text size="xl" weight='bold'>About WeightliftBuddy</Text>
                                <ChevronRight 
                                    size={48}
                                    strokeWidth={2}
                                />
                            </Group>
                        </UnstyledButton>
                    </Stack>
                </Center>
            </div>
        </>
    ); }

    export default About;