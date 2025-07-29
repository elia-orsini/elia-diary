import ExperienceAscii from "@/components/Exp";
import Image from "next/image";
import { TimesNewRoman } from "../layout";

export default async function IndexPage() {
  return (
    <main className="mx-auto my-24 mb-28 flex h-full w-screen flex-col px-6 font-sans font-normal text-red-600 md:w-4/5">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
        China&apos;s Oligopoly in the world of WeChat Miniprograms
      </h1>

      <p className="texl text-xl">
        If you&apos;ve ever been to china you might be wondering how, whether ordering for coffee,
        lunch or a quick snack from completely different places, every Wechat Miniprogram just feels
        so familiar. The reason behind this strange familiarity happens to be motivated by an
        effective oligopoly of businesses controlling the entire field of{" "}
        <i>Wechat Miniprogram Development</i>. This might not seem very surprising as every industry
        in tech seems to have small amounts of companies controlling big shares of the market (see
        internet browsers, social networks, delivery apps).
        <br />
        This is therefore certainly not a new phenomenon. However, there is a big distinction
        between the two phenomenons I have just mentioned. The most apparent of which is that while
        for internet browsers or social networks each major player is a consumer-facing brand with
        its own design philosophy, colour palette and typography, when it comes to the oligopoly of
        companies developing wechat miniprograms these are not brands consumers typically see or
        even care about. These big players are in charge of developing and making design decisions
        for thousands of other brands in every major consumer sector. What results from this is just
        a monotomy of design choices which becomes repetitive and boring. Every brand just starts
        looking exactly like the others.
        <br />
        <br />
        All this can seem like a positive aspect overall. I mean if you think about it, a user
        interface that looks very similar between brands makes it really easy for users to use and
        interact with. And that&apos;s a really good point. Usability is definitely a very important
        factor when it comes to consumer facing services. However, while we might be gaining a lot
        in terms of usability, we are losing so much in terms of aesthetic differences which
        ultimately makes us love our favourite restaurant, bar, café, art gallery.
        <br />
        <br />
        To better understand this, we can just take a look at a few examples of restaurants menus{" "}
        <a
          href="https://www.nytimes.com/interactive/2024/01/22/dining/restaurant-menu-trends.html?unlocked_article_code=1.ik4.ZmWJ.OxYUZyaSgfkW"
          className="underline"
          target="_blank"
        >
          featured
        </a>{" "}
        in the New York Times:
      </p>

      <div className="my-6 columns-2 gap-[7px] md:columns-3">
        <Image
          src={"/blog/wechat-miniprograms/casperfermentables-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/chelo-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/chungkiwa-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/onewhitestreet-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/phuket-cafe-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/pijja-palace-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/poltergeist-front-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/saltbreaker-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/sedalias-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/stissinghouse-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/tatemo-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/comfortkitchen-@@-900@x2.webp"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
      </div>

      <p className="my-6 text-xl">
        These few restaurants menus I think give a really good idea of how different a one page menu
        can look like if you don&apos;t follow a strict template. The amount of possibilities when
        it comes to the layout, the philosophy, the vibe you want to convey is just absolutely
        endless. And I think even tho it&apos;s very different, it <i>usually</i> remains easy to
        interpret for the people dining at that place.
      </p>

      <div className="my-6 columns-2 gap-[7px] md:columns-3">
        <Image
          src={"/blog/wechat-miniprograms/2/iphone1.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/iphone2.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/iphone3.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/iphone4.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/iphone5.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/iphone6.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
      </div>

      <p className="my-6 text-xl">
        Don&apos;t get me wrong. The few Wechat Miniprograms developers are doing an amazing job at
        trying to differentiate between the various brands using the same services. But I think
        it&apos;s just not enough to make the user get attached to a completely <i>unique</i> UI
        that brands could have. This is really easy to notice when interacting with most websites on
        the web. See here:
      </p>

      <div className="my-6 columns-2 gap-[7px]">
        <Image
          src={"/blog/wechat-miniprograms/2/web1.jpeg"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/web3.jpeg"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/web2.jpeg"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/web5.jpeg"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/web4.jpeg"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/web6.jpeg"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
      </div>

      <p className="my-6 text-xl">
        The curious thing is that even though most websites might use templates, they are
        idiosyncratic enough to express what their brand is about. Some websites might be not
        perfect, I have to conced that, but they still represent a unique experience. Again, see
        when ordering from completely different cafes/bakeries in China:
      </p>

      <div className="my-6 columns-4 gap-[7px]">
        <Image
          src={"/blog/wechat-miniprograms/2/o1.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/o2.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/o4.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
        <Image
          src={"/blog/wechat-miniprograms/2/o3.png"}
          alt=""
          width={"0"}
          height={"0"}
          sizes="500px"
          className={`my-[7px] h-auto w-full transition-opacity duration-500`}
        />
      </div>

      <p className={`mx-auto mt-40 text-base font-bold text-red-600 ${TimesNewRoman.className}`}>
        It seems like you reached the end. <i>Thank you</i>.
      </p>

      <ExperienceAscii />
    </main>
  );
}
