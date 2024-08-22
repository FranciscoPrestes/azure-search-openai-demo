import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = ["Tell me about Hamsa Team?", "Tell me about Hamsa Products?", "What is DREX CBDC?"];

const GPT4V_EXAMPLES: string[] = [
    "Can you give me some exemples of how to use Hamsa API to generate a token?",
    "Can you give me some exemples of use cases of each product of Hamsa?",
    "Can you askme some questions and help me to understands how Hamsa can Help my company?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
