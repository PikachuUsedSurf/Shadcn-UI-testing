import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export const LoginButton = () => {
    return (
      <div>
          <Dialog>
              <DialogTrigger> <Button variant={"outline"}>Login</Button> </DialogTrigger>
              <DialogContent>
                  <DialogHeader>
                      <DialogTitle>LOGIN TO TMX</DialogTitle>
                      <DialogDescription>Use your Office credentials</DialogDescription>
                  </DialogHeader>
                  <div className={"grid grid-cols-4 items-center gap-4"}>
                      <Label htmlFor={"name"} className={"text-right"}> Username</Label>
                      <Input id={"name"} placeholder={"Username"} className={"col-span-3"}/>
                  </div>
                  <div className={"grid grid-cols-4 items-center gap-4"}>
                      <Label htmlFor={"name"} className={"text-right"}>Password</Label>
                      <Input type={"password"} placeholder={"Password"} className={"col-span-3"}/>
                  </div>
                  <DialogFooter>
                      <Button> LOGIN</Button>
                  </DialogFooter>
              </DialogContent>
          </Dialog>
      </div>
    );
}