import {Card, CardContent} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

export const Reports = () => {
    return(
        <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
            <Dialog>
                <DialogTrigger>
                    <Card className={"hover:bg-gray-50"}>
                        <CardContent className={"flex flex-col"}>
                            <h2 className={"text-lg font-semibold text-left"}>Meeting Notes</h2>
                            <p className={"text-sm text-gray-500 text-left"}>Let us Discuss about the latest project plans for the next phase.</p>
                            <p className={"text-sm text-gray-500 text-right pt-2"}>2 min ago</p>
                            <div className={"flex mt-2 gap-2"}>
                                <span className={" text-sm rounded-full px-2 py-1 bg-green-300 "}>Meetings</span>
                                <span className={" text-sm rounded-full px-2 py-1 bg-blue-300 "}>Projects</span>
                            </div>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Meeting Notes</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        Let’s create a detailed meeting summary for the meeting that took place on the 23rd of March.
                        A well-crafted meeting summary ensures that essential information is captured,
                        decisions are documented, and team alignment is fostered. Here are the key components to include:
                    </DialogDescription>
                    <DialogFooter>
                        <div className={"flex flex-col gap-6"}>
                            <div className={"flex gap-2"}>
                                <span className={"text-sm px-2 py-1 rounded-full bg-blue-500"}> Meeting </span>
                                <span className={"text-sm px-2 py-1 rounded-full bg-green-500"}> Planning </span>
                            </div>
                            <div className={"grid grid-cols-3 gap-2"}>
                                <Button>Save</Button>
                                <Button variant={"draft"}>Draft</Button>
                                <Button variant={"destructive"}>Delete</Button>
                            </div>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}