import MainLayout from "@/layouts/MainLayout";
import {Button} from "@heroui/button";

export default function Home() {
    return (
        <MainLayout>
            <div className="flex flex-col gap-y-6 items-center justify-center">
                <Button>Click me</Button>
                <p className="h-[1500px]">Home</p>
            </div>
        </MainLayout>
    );
}
