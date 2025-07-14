import { Link } from "react-router";
import "./App.css";
import { Button } from "./components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function App() {
  const [getValue, setGetValue] = useState("");

  const handleSignIn = () => {
    alert("this is sign in Button");
    console.log("hello");
  };

  console.log(getValue);

  return (
    <>
      <div className="w-full shadow">
        <NavigationMenu className="mx-auto flex justify-between px-4 py-6 max-w-7xl">
          <div className="font-extrabold text-3xl">logo</div>
          <NavigationMenuList className="flex gap-6 font-bold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </NavigationMenuList>
          <div>
            <Button onClick={handleSignIn}>SignIn</Button>
            <Button className={`ml-2`}>SignUp</Button>
          </div>
        </NavigationMenu>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button className="bg-primary text-primary-foreground">Button</Button>
      </div>
      <Select value={getValue} onValueChange={(value) => setGetValue(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default App;
