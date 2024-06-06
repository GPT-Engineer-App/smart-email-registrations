import React, { useState } from "react";
import { Container, VStack, Input, Button, Textarea, Text, List, ListItem, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [emailList, setEmailList] = useState([]);

  const handleRegister = () => {
    const emailArray = emails.split("\n").filter((email) => email.trim() !== "");
    if (emailArray.length > 50) {
      alert("Please enter no more than 50 emails.");
      return;
    }
    setEmailList(emailArray.map((email) => ({ email, password })));
  };

  const handleRemoveEmail = (index) => {
    setEmailList(emailList.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Textarea placeholder="Enter up to 50 emails, one per line" value={emails} onChange={(e) => setEmails(e.target.value)} />
        <Input placeholder="Default Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="teal" onClick={handleRegister}>
          Register Emails
        </Button>
        <List spacing={3} width="100%">
          {emailList.map((item, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{item.email}</Text>
              <IconButton aria-label="Remove" icon={<FaTrash />} onClick={() => handleRemoveEmail(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
