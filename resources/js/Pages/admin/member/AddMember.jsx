import PageTitle from "@/Components/Dashboard/PageTitle";
import {
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

import { Input } from "@/Components/ui/input";
import InputIcon from "@/Components/ui/input-icon";
import { Label } from "@/Components/ui/label";
import { FaCalendarDays, FaMapLocation } from "react-icons/fa6";
import { ImUser } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";

import { Calendar } from "@/Components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdTransgender } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { format } from "date-fns";
import { PiBuildingsFill } from "react-icons/pi";
import { TbZip } from "react-icons/tb";

const AddMember = ({ auth }) => {
    const [date, setDate] = useState();
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="All Members" />
            <PageTitle>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 font-medium hover:text-primary"
                        >
                            <IoHome /> Gym
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link
                            href="/members"
                            className="font-medium hover:text-primary"
                        >
                            Members
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="text-primary">
                        Add New Member
                    </BreadcrumbItem>
                </BreadcrumbList>
            </PageTitle>
            <div>
                <form className="space-y-5">
                    <Card>
                        <CardHeader>
                            <CardTitle>Add new Member</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="fname">First Name</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <ImUser />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="fname"
                                                name="fname"
                                                placeholder="First Name"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="lname">Last Name</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <ImUser />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="lname"
                                                name="lname"
                                                placeholder="Last Name"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="gender">Gender</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <MdTransgender />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Select className="">
                                                <SelectTrigger className="rounded-l-none border border-l-0">
                                                    <SelectValue placeholder="..." />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="male">
                                                        Male
                                                    </SelectItem>
                                                    <SelectItem value="female">
                                                        Female
                                                    </SelectItem>
                                                    <SelectItem value="other">
                                                        Other
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="lname">Email</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <FaEnvelopeOpenText />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="Email Address"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="gender">Phone</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <div className="w-full flex-1">
                                            <PhoneInput
                                                inputProps={{
                                                    name: "phone",
                                                    required: true,
                                                    autoFocus: false,
                                                }}
                                                country={"np"}
                                                inputClass="phone-input"
                                                className="h-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="gender">
                                        Date of Birth
                                    </Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <FaCalendarDays />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Input
                                                        type="text"
                                                        value={
                                                            date
                                                                ? format(
                                                                      date,
                                                                      "PP",
                                                                  )
                                                                : "Pick a date"
                                                        }
                                                        className="cursor-pointer"
                                                        placeholder="Pick a date"
                                                    />
                                                </PopoverTrigger>
                                                <PopoverContent className="top-0 w-auto">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="street-address">
                                        Street Address
                                    </Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <RiMapPin2Fill />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="street-address"
                                                name="street-address"
                                                placeholder="Street Address"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="lname">City/District</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <PiBuildingsFill />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="lname"
                                                name="lname"
                                                placeholder="Last Name"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="state">
                                        State / Province
                                    </Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <FaMapLocation />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="state"
                                                name="state"
                                                placeholder="State / Province"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="zip">Zip/Postal Code</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <TbZip />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="zip"
                                                name="zip"
                                                placeholder="***-***"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="country">Country</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <BsGlobeCentralSouthAsia />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                id="country"
                                                name="country"
                                                placeholder="Country"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="gender">
                                        Date of Birth
                                    </Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <FaCalendarDays />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Input
                                                        type="text"
                                                        value={
                                                            date
                                                                ? format(
                                                                      date,
                                                                      "PP",
                                                                  )
                                                                : "Pick a date"
                                                        }
                                                        className="cursor-pointer"
                                                        placeholder="Pick a date"
                                                    />
                                                </PopoverTrigger>
                                                <PopoverContent className="top-0 w-auto">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddMember;
