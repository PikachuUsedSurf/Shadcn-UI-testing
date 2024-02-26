import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Modal() {
    return (
        <div className={"flex justify-center items-center mt-4 "}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"default"}>Login</Button>
                </PopoverTrigger>
                <PopoverContent className={"w-[90vw] max-w-sm"}>
                    <Card>
                        <CardHeader>
                            <CardTitle>RMS LOGIN</CardTitle>
                            <CardDescription>Enter your Credentials bellow</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <Label>
                                    Email
                                </Label>
                                <Input id={"email"} placeholder={"nana@example.com"} type={"email"}></Input>
                                <Label>Password</Label>
                                <Input id={"password"} placeholder={"Type a secure Password"} type={"password"}></Input>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Submit</Button>
                        </CardFooter>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    );
};




        