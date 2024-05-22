import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversation = page.props.selectedConversation;

    console.log("conversations", conversations);
    console.log("selectedConversations", selectedConversation);

    useEffect(() => {
        //:TODO: With Echo listen when the users sign in with online channel.
        // there is an error with join en Echo.join, returns

        Echo.join('online')
            .here((users) => {
                console.log("users", users);
            })
            .joining((user) => {
                console.log(user.name);
            })
            .leaving((user) => {
                console.log(user.name);
            })
            .error((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            ChatLayout
            <div>{children}</div>
        </>
    );
};

export default ChatLayout;
