/** @format */
"use client";
import Card from "@/components/Card";
import CountdownCard from "@/components/CountdownCard";
import EventCard from "@/components/EventCard";
import EventCard2 from "@/components/EventCard2";

export default function Home() {
  return (
    <div className="flex gap-10 justify-center items-center w-full min-h-screen px-40">
      {/* <Input
          label="Name"
          type="text"
          placeholder="Enter your name"
          size="md"
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
          iconLeft={
            <i className="fa fa-user">
              <img
                className="h-4 w-4"
                src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png"
                alt="username"
              />
            </i>
          }
        />

        <Input
          label="Text"
          type="password"
          placeholder="Enter your text"
          size="md"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          iconLeft={
            <i className="fa fa-user">
              <img
                className="h-4 w-4"
                src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png"
                alt="username"
              />
            </i>
          }
          // eye
        /> */}
      <div className="flex flex-col gap-10">
        <div className="flex">
          {/* <Button
            color="danger"
            size="lg"
            type="link"
            hover="shadow-lg"
            effect="transition"
            error
            onClick={handleSubmit}
          >
            Click me!
          </Button> */}
          {/* size ni lg baihad bolno yvtsdaa harj baigaad uurchilnu */}
          <Card
            size="lg"
            title="Thunder ch ymu"
            image="image copy 2.png"
            imageSize="full"
            background="gray"
            price={3000000}
            textColor="white"
            border="rounded"
            hoverEffect
            rating={2}
            logo="/image copy.png"
            onSale
          />
          <Card
            size="lg"
            title="Cake"
            image="image copy 3.png"
            imageSize="md"
            background="white"
            price={3000000}
            textColor="black"
            border="rounded"
            hoverEffect
            rating={4}
            logo="/image copy.png"
            onSale
          />
        </div>
        <CountdownCard
          title="Хямдрал"
          textColorMode="light"
          subtitle="Iphone 12 pro"
          discountPercentage={15}
          leasing={{ percentage: 6, rating: 4 }}
          priceRange={{ min: 500000, max: 650000 }}
          finalPrice={4500000}
          endDate={new Date("2025-02-14T00:00:00")}
          image="/image copy 4.png"
          gradient="from-blue-500 to-blue-700"
          buttonText="Buy now"
          onButtonClick={() => alert("Захиалсан!")}
        />
        <div className="flex flex-col gap-2">
          <EventCard2
            title="The Perfume Night"
            textColorMode="light"
            subtitle="Нэгдсэн шинэ жил"
            discountPercentage={15}
            desc="Цөөн суудал үлдлээ"
            endDate={new Date("2025-02-14T00:00:00")}
            image="/image copy 5.png"
            gradient="[gray-500]"
            buttonText="Buy ticket"
            onButtonClick={() => alert("Захиалсан!")}
          />
          <div className="flex gap-2 ">
            <EventCard
              title="BOLD-24 concert"
              image="image copy 5.png"
              date="2025.03.08"
              time="19:00"
              location="Shangri-La Ballroom"
              backgroundColor="bg-gray-900"
            />
            <EventCard
              title="BOLD-24 concert"
              image="image copy 5.png"
              date="2025.03.08"
              time="19:00"
              location="Shangri-La Ballroom"
              backgroundColor="bg-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
