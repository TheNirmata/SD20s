"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Spacer,Form, Input, Select, SelectItem, Checkbox, Button } from "@heroui/react";

import HorizontalLine from "../../../public/horizontalLine.png";
import contactUsBlur from "../../../public/static-images/contact-us-images/contactUsBlur.png";
const ContactUsBlock = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleName = (e: { target: { value: string| ((prevState: string) => string); }; }) => setName(e.target.value);
  const handleEmail = (e: { target: { value: string| ((prevState: string) => string); }; }) => setEmail(e.target.value);
  const handleMessage = (e: { target: { value: string| ((prevState: string) => string); }; }) => setMessage(e.target.value);

  return (
    <>
    <Spacer y={20} />
    <div className="w-[314px]">
      <Image src={HorizontalLine} alt="horizontal-line"/>
    </div>
    <Spacer y={14} />
    <div className="w-[200px] h-[47px]">
      <Image src={contactUsBlur} alt="contact-us-blur" />
    </div>
    <Spacer y={24} />
    <div className="w-[256px]">
    <Form
      className="w-full justify-center items-center"
    >
      <Input
        isRequired
        errorMessage="Please enter your name"
        placeholder="Name"
        value={name}
        onChange={handleName}
        className="bg-transparent border-none w-[256px] h-[35px] bg-[#272727] text-[#FFFFFF33] text-[15px]"
      />
      <Spacer y={2} />
      <Input
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        className="bg-transparent w-[256px] h-[35px]  bg-[#272727] text-[#FFFFFF33] text-[15px]"
      />
      <Spacer y={2} />
      <Input
        placeholder="Message..."
        value={message}
        onChange={handleMessage}
        className="bg-transparent w-[256px] h-[110px]  bg-[#272727] text-[#FFFFFF33] text-[15px]"
      />
      <Spacer y={2} />
      <Button type="submit" variant="bordered">Submit</Button>
    </Form>
    </div>
    <Spacer y={20} />
    <div className="w-[314px]">
      <Image src={HorizontalLine} alt="horizontal-line"/>
    </div>

    
    </>
  );
};

export default ContactUsBlock;