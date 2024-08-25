import PageTitle from "@/Components/Dashboard/PageTitle";
import {
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BsFillInfoCircleFill, BsGlobeCentralSouthAsia } from "react-icons/bs";

import { Input } from "@/Components/ui/input";
import InputIcon from "@/Components/ui/input-icon";
import { Label } from "@/Components/ui/label";
import {
    FaCalendarDays,
    FaHourglassStart,
    FaIdCardClip,
    FaMapLocation,
    FaPeoplePulling,
    FaUserLock,
} from "react-icons/fa6";
import { ImUser } from "react-icons/im";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";
import { RxReset } from "react-icons/rx";
import { BiSolidAddToQueue } from "react-icons/bi";
import { IoIosFitness } from "react-icons/io";

import { Calendar } from "@/Components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import {
    SelectContent,
    Select as SelectIn,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { useState } from "react";
import { FaEnvelopeOpenText, FaSave } from "react-icons/fa";
import { MdTransgender } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { format } from "date-fns";
import { PiBuildingsFill, PiPasswordFill } from "react-icons/pi";
import { TbZip } from "react-icons/tb";

import { Button } from "@/Components/ui/button";
import { countriesConfig } from "@/config/country";
import { membershipConfig } from "@/config/membership-plan";

const countries = countriesConfig?.CountryList || [];
const memberships = membershipConfig?.MembershipPlans || [];

const AddMember = ({ auth }) => {
    const [date, setDate] = useState();

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="All Members" />
            <PageTitle title="Member Signup">
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
                <form className="space-y-6">
                    {/* Persoal Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="fname">
                                        First Name
                                        <sup className="text-destructive">
                                            *
                                        </sup>
                                    </Label>
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
                                                className="capitalize"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="lname">
                                        Last Name
                                        <sup className="text-destructive">
                                            *
                                        </sup>
                                    </Label>
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
                                                className="capitalize"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="gender">
                                        Gender
                                        <sup className="text-destructive">
                                            *
                                        </sup>
                                    </Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <MdTransgender />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <SelectIn className="">
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
                                            </SelectIn>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
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
                                                className="lowercase"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="gender">
                                        Phone
                                        <sup className="text-destructive">
                                            *
                                        </sup>
                                    </Label>
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
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
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
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="age">Age</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <FaHourglassStart />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <Input
                                                type="text"
                                                disabled
                                                className="bg-muted"
                                                placeholder="##"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Address */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Address Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
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
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
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
                                                placeholder="City / District"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
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
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
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
                                <div className="col-span-4 flex flex-col gap-2 lg:col-span-1">
                                    <Label htmlFor="country">Country</Label>
                                    <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                        <InputIcon>
                                            <BsGlobeCentralSouthAsia />
                                        </InputIcon>
                                        <div className="w-full flex-1">
                                            <SelectIn className="">
                                                <SelectTrigger className="rounded-l-none border border-l-0">
                                                    <SelectValue
                                                        placeholder="-- Select Country --"
                                                        className="text-muted-foreground"
                                                    />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    {countries.map(
                                                        (country, i) => {
                                                            return (
                                                                <SelectItem
                                                                    value={
                                                                        country.name
                                                                    }
                                                                    key={i}
                                                                >
                                                                    {
                                                                        country.name
                                                                    }
                                                                </SelectItem>
                                                            );
                                                        },
                                                    )}
                                                </SelectContent>
                                            </SelectIn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Membership Details */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Membership Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-4 flex flex-col gap-2 lg:col-span-2">
                                        <Label htmlFor="membership">
                                            Membership Plan
                                            <sup className="text-destructive">
                                                *
                                            </sup>
                                        </Label>
                                        <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                            <InputIcon>
                                                <FaIdCardClip />
                                            </InputIcon>
                                            <div className="w-full flex-1">
                                                <SelectIn className="">
                                                    <SelectTrigger className="rounded-l-none border border-l-0">
                                                        <SelectValue placeholder="-- Membership Plan --" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        {memberships.length <
                                                        1 ? (
                                                            <Link
                                                                href="/dashboard"
                                                                className="flex w-full items-center gap-2 bg-muted px-3 py-2 text-sm text-primary hover:underline hover:underline-offset-2"
                                                            >
                                                                <BiSolidAddToQueue />{" "}
                                                                Create new plan
                                                            </Link>
                                                        ) : (
                                                            <>
                                                                {memberships.map(
                                                                    (
                                                                        membership,
                                                                        j,
                                                                    ) => {
                                                                        return (
                                                                            <SelectItem
                                                                                value={
                                                                                    membership.title
                                                                                }
                                                                                key={
                                                                                    j
                                                                                }
                                                                            >
                                                                                {
                                                                                    membership.title
                                                                                }
                                                                            </SelectItem>
                                                                        );
                                                                    },
                                                                )}
                                                            </>
                                                        )}
                                                    </SelectContent>
                                                </SelectIn>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 flex flex-col gap-2 lg:col-span-2">
                                        <Label htmlFor="trainer">
                                            Personal Trainer
                                            <sup className="text-destructive">
                                                *
                                            </sup>
                                        </Label>
                                        <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                            <InputIcon>
                                                <IoPersonSharp />
                                            </InputIcon>
                                            <div className="w-full flex-1">
                                                <SelectIn className="">
                                                    <SelectTrigger className="rounded-l-none border border-l-0">
                                                        <SelectValue placeholder="-- Select Trainer --" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        {memberships.length <
                                                        1 ? (
                                                            <Link
                                                                href="/dashboard"
                                                                className="flex w-full items-center gap-2 bg-muted px-3 py-2 text-sm text-primary hover:underline hover:underline-offset-2"
                                                            >
                                                                <BiSolidAddToQueue />{" "}
                                                                Create new plan
                                                            </Link>
                                                        ) : (
                                                            <>
                                                                {memberships.map(
                                                                    (
                                                                        membership,
                                                                        j,
                                                                    ) => {
                                                                        return (
                                                                            <SelectItem
                                                                                value={
                                                                                    membership.title
                                                                                }
                                                                                key={
                                                                                    j
                                                                                }
                                                                            >
                                                                                {
                                                                                    membership.title
                                                                                }
                                                                            </SelectItem>
                                                                        );
                                                                    },
                                                                )}
                                                            </>
                                                        )}
                                                    </SelectContent>
                                                </SelectIn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* How did you hear about us */}
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    How did you hear about us?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-4 flex flex-col gap-2 lg:col-span-3">
                                        <Label htmlFor="knowus">
                                            How did you know us?
                                        </Label>
                                        <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                            <InputIcon>
                                                <BsFillInfoCircleFill />
                                            </InputIcon>
                                            <div className="w-full flex-1">
                                                <SelectIn className="">
                                                    <SelectTrigger className="rounded-l-none border border-l-0">
                                                        <SelectValue placeholder="-- (Optional) Slect --" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Search Engine">
                                                            Search Engine
                                                            (Google, Bing, etc)
                                                        </SelectItem>
                                                        <SelectItem value="Google Maps">
                                                            Google Maps Search
                                                        </SelectItem>
                                                        <SelectItem value="Social Media">
                                                            Social Media
                                                        </SelectItem>
                                                        <SelectItem value="Referrale">
                                                            Referral
                                                        </SelectItem>
                                                        <SelectItem value="Events">
                                                            Events
                                                        </SelectItem>
                                                    </SelectContent>
                                                </SelectIn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Password */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Password */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Password</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-4 flex flex-col gap-2 lg:col-span-2">
                                        <Label htmlFor="password">
                                            Enter Password{" "}
                                            <sup className="text-destructive">
                                                *
                                            </sup>
                                        </Label>
                                        <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                            <InputIcon>
                                                <FaUserLock />
                                            </InputIcon>
                                            <div className="w-full flex-1">
                                                <Input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 flex flex-col gap-2 lg:col-span-2">
                                        <Label htmlFor="cpassword">
                                            Confirm Password{" "}
                                            <sup className="text-destructive">
                                                *
                                            </sup>
                                        </Label>
                                        <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                            <InputIcon>
                                                <FaUserLock />
                                            </InputIcon>
                                            <div className="w-full flex-1">
                                                <Input
                                                    type="password"
                                                    id="cpassword"
                                                    name="cpassword"
                                                    placeholder="Confirm Password"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emergency Contact */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Emergency Contacts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-4 flex flex-col gap-2 lg:col-span-2">
                                        <Label htmlFor="gender">
                                            Phone Number
                                        </Label>
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
                                    <div className="col-span-4 flex flex-col gap-2 lg:col-span-2">
                                        <Label htmlFor="relation">
                                            Relation
                                        </Label>
                                        <div className="group relative flex w-full flex-row flex-wrap items-stretch">
                                            <InputIcon>
                                                <FaPeoplePulling />
                                            </InputIcon>
                                            <div className="w-full flex-1">
                                                <SelectIn className="">
                                                    <SelectTrigger className="rounded-l-none border border-l-0">
                                                        <SelectValue placeholder="-- (Optional) Slect --" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Parent">
                                                            Parent
                                                        </SelectItem>
                                                        <SelectItem value="Spouse">
                                                            Spouse
                                                        </SelectItem>
                                                        <SelectItem value="Sibiling">
                                                            Sibiling
                                                        </SelectItem>
                                                        <SelectItem value="Family Member">
                                                            Family Member
                                                        </SelectItem>
                                                        <SelectItem value="Friend">
                                                            Friend
                                                        </SelectItem>
                                                    </SelectContent>
                                                </SelectIn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Submit Form */}
                    <div className="sticky bottom-0 flex items-center gap-2 rounded-lg border border-border bg-background p-6">
                        <Button type="submit" className="gap-2 uppercase">
                            <FaSave /> Complete Signup
                        </Button>
                        <Button
                            type="reset"
                            variant="ghost"
                            className="gap-2 uppercase"
                        >
                            <RxReset /> Reset
                        </Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddMember;
