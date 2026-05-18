import { useEffect, useState } from "react";
import { spotifyHost, spotifyURL, styleFromClass, styles, ytHost, ytURL } from "./css";
import YT from "./YT";
import Unknown from "./Unkown";
import Spotify from "./Spotify";

const songs2 = [
	{
		name: "perfect",
		album: "÷ (deluxe)",
		artist: "ed sheeran",
		savedOn: "jun 14, 2021",
		duration: 263,
		img: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
	},
	{
		name: "pretty girl",
		album: "pretty girl",
		artist: "clairo",
		savedOn: "jun 14, 2021",
		duration: 178,
		img: "https://i.scdn.co/image/ab67616d00004851efe812ae54f0698a32ccae14",
	},
	{
		name: "mariposa",
		album: "mariposa",
		artist: "peach tree rascals",
		savedOn: "jun 14, 2021",
		duration: 210,
		img: "https://i.scdn.co/image/ab67616d00004851180bec60ad04205a903e4441",
	},
	{
		name: "sex money feelings die",
		album: "so sad so sexy",
		artist: "lykke li",
		savedOn: "jun 14, 2021",
		duration: 139,
		img: "https://i.scdn.co/image/ab67616d0000485136a99de50740ea9c1b05ef31",
	},
	{
		name: "silly girl",
		album: "rabbit hearted.",
		artist: "chloe moriondo",
		savedOn: "jun 14, 2021",
		duration: 198,
		img: "https://i.scdn.co/image/ab67616d00004851a21a30e9850057345cce3182",
	},
	{
		name: "falling for u",
		album: "falling for u",
		artist: "peachy!, mxmtoon",
		savedOn: "jun 14, 2021",
		duration: 124,
		img: "https://i.scdn.co/image/ab67616d00004851faa57568c0d25c2c50d3f245",
	},
	{
		name: "dead to me",
		album: "isolation",
		artist: "kali uchis",
		savedOn: "jun 14, 2021",
		duration: 199,
		img: "https://i.scdn.co/image/ab67616d0000485190b4e1905b1fc48c537ec053",
	},
	{
		name: "mine",
		album: "cosmic",
		artist: "bazzi",
		savedOn: "jun 11, 2021",
		duration: 131,
		img: "https://i.scdn.co/image/ab67616d00004851f9f2d43ff44bdfbe8c556f8d",
	},
	{
		name: "we fell in love in october",
		album: "we fell in love in october / forget her",
		artist: "girl in red",
		savedOn: "jun 8, 2021",
		duration: 184,
		img: "https://i.scdn.co/image/ab67616d00004851eb13fbc012815ea6e834e842",
	},
	{
		name: "sweater weather",
		album: "i love you.",
		artist: "the neighbourhood",
		savedOn: "jun 4, 2021",
		duration: 240,
		img: "https://i.scdn.co/image/ab67616d000048518265a736a1eb838ad5a0b921",
	},
	{
		name: "the king",
		album: "the king",
		artist: "conan gray",
		savedOn: "jun 4, 2021",
		duration: 174,
		img: "https://i.scdn.co/image/ab67616d0000485108513d0c65b239ef6fee94f9",
	},
	{
		name: "save your tears (with ariana grande) (remix)",
		album: "save your tears (remix)",
		artist: "the weeknd, ariana grande",
		savedOn: "jun 4, 2021",
		duration: 191,
		img: "https://i.scdn.co/image/ab67616d00004851c6af5ffa661a365b77df6ef6",
	},
	{
		name: "prom dress",
		album: "the masquerade",
		artist: "mxmtoon",
		savedOn: "jun 3, 2021",
		duration: 197,
		img: "https://i.scdn.co/image/ab67616d0000485190b3a256a52b231b1e4c486b",
	},
	{
		name: "violent - slowed + reverb",
		album: "violent (slowed + reverb)",
		artist: "leverutlo",
		savedOn: "jun 3, 2021",
		duration: 152,
		img: "https://i.scdn.co/image/ab67616d000048517d937086c88ac3f4619c8083",
	},
	{
		name: "cloud 9",
		album: "honeymoon",
		artist: "beach bunny",
		savedOn: "may 23, 2021",
		duration: 147,
		img: "https://i.scdn.co/image/ab67616d00004851d6fd719531afda5f9cc0e248",
	},
	{
		name: "no friends",
		album: "no friends",
		artist: "cadmium, rosendale",
		savedOn: "may 6, 2021",
		duration: 235,
		img: "https://i.scdn.co/image/ab67616d00004851df0e30f89f0504ab698f16ac",
	},
	{
		name: "crush",
		album: "bad ideas",
		artist: "tessa violet",
		savedOn: "may 1, 2021",
		duration: 216,
		img: "https://i.scdn.co/image/ab67616d00004851691253f50c8d0c3a2d52363f",
	},
	{
		name: "feel something",
		album: "feel something",
		artist: "bea miller",
		savedOn: "jan 21, 2022",
		duration: 180,
		img: "https://i.scdn.co/image/ab67616d0000485137b16e42d8ac8413bb2dc6ed",
	},
	{
		name: "confident",
		album: "journals",
		artist: "justin bieber, chance the rapper",
		savedOn: "aug 25, 2021",
		duration: 248,
		img: "https://i.scdn.co/image/ab67616d0000485158ae8fddecbd2630005409c9",
	},
	{
		name: "dancing in my room",
		album: "dancing in my room",
		artist: "347aidan",
		savedOn: "aug 10, 2021",
		duration: 180,
		img: "https://i.scdn.co/image/ab67616d000048515f4fbb2f9c3de128e526944c",
	},
	{
		name: "are you bored yet? (feat. clairo)",
		album: "nothing happens",
		artist: "wallows, clairo",
		savedOn: "aug 3, 2021",
		duration: 178,
		img: "https://i.scdn.co/image/ab67616d000048511df393f4cf29c80c04456f77",
	},
	{
		name: "hymn for the weekend",
		album: "a head full of dreams",
		artist: "coldplay",
		savedOn: "aug 1, 2021",
		duration: 258,
		img: "https://i.scdn.co/image/ab67616d000048518ff7c3580d429c8212b9a3b6",
	},
	{
		name: "bubble gum",
		album: "bubble gum",
		artist: "clairo",
		savedOn: "jul 26, 2021",
		duration: 175,
		img: "https://i.scdn.co/image/ab67616d000048515d93417bde90e0bd951dab08",
	},
	{
		name: "why'd you only call me when you're high?",
		album: "am",
		artist: "arctic monkeys",
		savedOn: "jul 21, 2021",
		duration: 161,
		img: "https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163",
	},
	{
		name: "daddy issues",
		album: "wiped out!",
		artist: "the neighbourhood",
		savedOn: "jul 21, 2021",
		duration: 260,
		img: "https://i.scdn.co/image/ab67616d000048515260c62db020e5861a51556d",
	},
	{
		name: "505",
		album: "favourite worst nightmare",
		artist: "arctic monkeys",
		savedOn: "jul 18, 2021",
		duration: 253,
		img: "https://i.scdn.co/image/ab67616d00004851b1f8da74f225fa1225cdface",
	},
	{
		name: "freaks",
		album: "freaks",
		artist: "surf curse",
		savedOn: "jul 18, 2021",
		duration: 147,
		img: "https://i.scdn.co/image/ab67616d000048513975b6b899eed4af577f7ba6",
	},
	{
		name: "kiss me more (feat. sza)",
		album: "kiss me more (feat. sza)",
		artist: "doja cat, sza",
		savedOn: "jun 27, 2021",
		duration: 208,
		img: "https://i.scdn.co/image/ab67616d000048516c031afd210aed3084f80956",
	},
	{
		name: "my ordinary life",
		album: "my ordinary life",
		artist: "the living tombstone",
		savedOn: "jun 24, 2021",
		duration: 230,
		img: "https://i.scdn.co/image/ab67616d00004851227edcd51b6622cdcbe9f43c",
	},
	{
		name: "perfect",
		album: "÷ (deluxe)",
		artist: "ed sheeran",
		savedOn: "jun 14, 2021",
		duration: 263,
		img: "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
	},
	{
		name: "pretty girl",
		album: "pretty girl",
		artist: "clairo",
		savedOn: "jun 14, 2021",
		duration: 178,
		img: "https://i.scdn.co/image/ab67616d00004851efe812ae54f0698a32ccae14",
	},
	{
		name: "mariposa",
		album: "mariposa",
		artist: "peach tree rascals",
		savedOn: "jun 14, 2021",
		duration: 210,
		img: "https://i.scdn.co/image/ab67616d00004851180bec60ad04205a903e4441",
	},
	{
		name: "fight or flight",
		album: "kid krow",
		artist: "conan gray",
		savedOn: "aug 30, 2021",
		duration: 171,
		img: "https://i.scdn.co/image/ab67616d0000485188e3cda6d29b2552d4d6bc43",
	},
	{
		name: "swing lynn",
		album: "i'm sure",
		artist: "harmless",
		savedOn: "aug 29, 2021",
		duration: 321,
		img: "https://i.scdn.co/image/ab67616d00004851279c10fd08546bba5039f095",
	},
	{
		name: "ykwim?",
		album: "bipolar",
		artist: "yot club",
		savedOn: "aug 28, 2021",
		duration: 212,
		img: "https://i.scdn.co/image/ab67616d000048511a72818330a056c9d3556a68",
	},
	{
		name: "feel something",
		album: "feel something",
		artist: "bea miller",
		savedOn: "jan 21, 2022",
		duration: 180,
		img: "https://i.scdn.co/image/ab67616d0000485137b16e42d8ac8413bb2dc6ed",
	},
	{
		name: "confident",
		album: "journals",
		artist: "justin bieber, chance the rapper",
		savedOn: "aug 25, 2021",
		duration: 248,
		img: "https://i.scdn.co/image/ab67616d0000485158ae8fddecbd2630005409c9",
	},
	{
		name: "dancing in my room",
		album: "dancing in my room",
		artist: "347aidan",
		savedOn: "aug 10, 2021",
		duration: 180,
		img: "https://i.scdn.co/image/ab67616d000048515f4fbb2f9c3de128e526944c",
	},
	{
		name: "are you bored yet? (feat. clairo)",
		album: "nothing happens",
		artist: "wallows, clairo",
		savedOn: "aug 3, 2021",
		duration: 178,
		img: "https://i.scdn.co/image/ab67616d000048511df393f4cf29c80c04456f77",
	},
	{
		name: "hymn for the weekend",
		album: "a head full of dreams",
		artist: "coldplay",
		savedOn: "aug 1, 2021",
		duration: 258,
		img: "https://i.scdn.co/image/ab67616d000048518ff7c3580d429c8212b9a3b6",
	},
	{
		name: "bubble gum",
		album: "bubble gum",
		artist: "clairo",
		savedOn: "jul 26, 2021",
		duration: 175,
		img: "https://i.scdn.co/image/ab67616d000048515d93417bde90e0bd951dab08",
	},
	{
		name: "fight or flight",
		album: "kid krow",
		artist: "conan gray",
		savedOn: "aug 30, 2021",
		duration: 171,
		img: "https://i.scdn.co/image/ab67616d0000485188e3cda6d29b2552d4d6bc43",
	},
	{
		name: "swing lynn",
		album: "i'm sure",
		artist: "harmless",
		savedOn: "aug 29, 2021",
		duration: 321,
		img: "https://i.scdn.co/image/ab67616d00004851279c10fd08546bba5039f095",
	},
	{
		name: "ykwim?",
		album: "bipolar",
		artist: "yot club",
		savedOn: "aug 28, 2021",
		duration: 212,
		img: "https://i.scdn.co/image/ab67616d000048511a72818330a056c9d3556a68",
	},
	{
		name: "feel something",
		album: "feel something",
		artist: "bea miller",
		savedOn: "jan 21, 2022",
		duration: 180,
		img: "https://i.scdn.co/image/ab67616d0000485137b16e42d8ac8413bb2dc6ed",
	},
	{
		name: "play date",
		album: "cry baby (deluxe edition)",
		artist: "melanie martinez",
		savedOn: "apr 20, 2022",
		duration: 179,
		img: "https://i.scdn.co/image/ab67616d000048513899712512f50a8d9e01e951",
	},
	{
		name: "night changes",
		album: "four (deluxe)",
		artist: "one direction",
		savedOn: "apr 15, 2022",
		duration: 226,
		img: "https://i.scdn.co/image/ab67616d0000485134a29f220057810cce98e1b4",
	},
	{
		name: "deja vu",
		album: "sour",
		artist: "olivia rodrigo",
		savedOn: "apr 12, 2022",
		duration: 215,
		img: "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a",
	},
	{
		name: "happier",
		album: "sour",
		artist: "olivia rodrigo",
		savedOn: "apr 12, 2022",
		duration: 175,
		img: "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a",
	},
	{
		name: "futon",
		album: "futon",
		artist: "ūla",
		savedOn: "apr 1, 2022",
		duration: 156,
		img: "https://i.scdn.co/image/ab67616d000048518af3c4d40afb420d17f7b14a",
	},
	{
		name: "happier than ever",
		album: "happier than ever",
		artist: "billie eilish",
		savedOn: "mar 13, 2022",
		duration: 298,
		img: "https://i.scdn.co/image/ab67616d000048512a038d3bf875d23e4aeaa84e",
	},
	{
		name: "dandelions",
		album: "safe haven",
		artist: "ruth b.",
		savedOn: "jan 28, 2022",
		duration: 233,
		img: "https://i.scdn.co/image/ab67616d00004851b09403f05bc0c306cf96990f",
	},
	{
		name: "ken&barbie",
		album: "ken&barbie",
		artist: "kate gill",
		savedOn: "jan 21, 2022",
		duration: 251,
		img: "https://i.scdn.co/image/ab67616d0000485117fe7a36e0489cdda5df4ef6",
	},
	{
		name: "death bed (coffee for your head)",
		album: "death bed (coffee for your head)",
		artist: "powfu, beabadoobee",
		savedOn: "jan 17, 2022",
		duration: 173,
		img: "https://i.scdn.co/image/ab67616d00004851bf01fd0986a195d485922167",
	},
	{
		name: "lost umbrella",
		album: "lost umbrella",
		artist: "revomemel",
		savedOn: "jan 12, 2022",
		duration: 200,
		img: "https://i.scdn.co/image/ab67616d000048514c7a2ca8950216896d39c17f",
	},
	{
		name: "haru wo tsugeru",
		album: "haru wo tsugeru",
		artist: "yama",
		savedOn: "jan 12, 2022",
		duration: 196,
		img: "https://i.scdn.co/image/ab67616d00004851cccf5d223349faaca1c9a1b9",
	},
	{
		name: "blueberry eyes (feat. suga of bts)",
		album: "blueberry eyes (feat. suga of bts)",
		artist: "max, suga",
		savedOn: "jan 4, 2022",
		duration: 172,
		img: "https://i.scdn.co/image/ab67616d000048519660ae57836f713884d86cbb",
	},
	{
		name: "the one that got away",
		album: "teenage dream: the complete confection",
		artist: "katy perry",
		savedOn: "nov 26, 2021",
		duration: 227,
		img: "https://i.scdn.co/image/ab67616d00004851937af329667311f4b2831616",
	},
	{
		name: "love nwantiti (feat. dj yo! & ax'el) - remix",
		album: "love nwantiti (feat. dj yo! & ax'el) [remix]",
		artist: "ckay, dj yo!, ax'el",
		savedOn: "oct 18, 2021",
		duration: 188,
		img: "https://i.scdn.co/image/ab67616d0000485139bb326b58346f99b8692745",
	},
	{
		name: "miss wanna die",
		album: "miss wanna die",
		artist: "arb kribs",
		savedOn: "oct 17, 2021",
		duration: 213,
		img: "https://i.scdn.co/image/ab67616d00004851ae75f719217067678c91275a",
	},
	{
		name: "idfc",
		album: "deadroses",
		artist: "blackbear",
		savedOn: "sep 30, 2021",
		duration: 245,
		img: "https://i.scdn.co/image/ab67616d000048519bd9040e92f79ffb58eb9dbd",
	},
	{
		name: "sweater weather",
		album: "sweater weather",
		artist: "joel sunny",
		savedOn: "sep 29, 2021",
		duration: 181,
		img: "https://i.scdn.co/image/ab67616d00004851829d61574c2844411cb51328",
	},
	{
		name: "edit audios that are as hot as toji fushiguro 🛐_160k",
		album: "",
		artist: "",
		savedOn: "sep 29, 2021",
		duration: 473,
		img: "",
	},
	{
		name: "idk you yet",
		album: "idk you yet (live on piano)",
		artist: "alexander 23",
		savedOn: "may 18, 2022",
		duration: 184,
		img: "https://i.scdn.co/image/ab67616d00004851fe03064db12346c962cd0c56",
	},
	{
		name: "10 things i hate about you",
		album: "10 things i hate about you",
		artist: "leah kate",
		savedOn: "jun 10, 2022",
		duration: 157,
		img: "https://i.scdn.co/image/ab67616d00004851596a9d381ffda7d97da5d702",
	},
	{
		name: "arcade",
		album: "small town boy (track by track)",
		artist: "duncan laurence",
		savedOn: "may 18, 2022",
		duration: 185,
		img: "https://i.scdn.co/image/ab67616d0000485159ce61a220822995a3ccd27f",
	},
	{
		name: "happier than ever - edit",
		album: "happier than ever (edit)",
		artist: "billie eilish",
		savedOn: "may 18, 2022",
		duration: 151,
		img: "https://i.scdn.co/image/ab67616d0000485131aa3ebe23f59778bff800c9",
	},
	{
		name: "positions",
		album: "positions",
		artist: "ariana grande",
		savedOn: "may 18, 2022",
		duration: 172,
		img: "https://i.scdn.co/image/ab67616d0000485155b8f4c3458e256eca14f18f",
	},
	{
		name: "wildest dreams",
		album: "1989",
		artist: "taylor swift",
		savedOn: "may 18, 2022",
		duration: 220,
		img: "https://i.scdn.co/image/ab67616d00004851b7e976d2b35c767f9012cb72",
	},
	{
		name: "heartbreak anniversary",
		album: "take time",
		artist: "givēon",
		savedOn: "may 18, 2022",
		duration: 198,
		img: "https://i.scdn.co/image/ab67616d0000485190fb297f6a608911e7aaf760",
	},
	{
		name: "mad at disney",
		album: "mad at disney",
		artist: "salem ilese",
		savedOn: "may 18, 2022",
		duration: 136,
		img: "https://i.scdn.co/image/ab67616d000048511cb068e27f83975bc827586e",
	},
	{
		name: "make you mine",
		album: "make you mine",
		artist: "public",
		savedOn: "may 18, 2022",
		duration: 232,
		img: "https://i.scdn.co/image/ab67616d000048510d0621554b1c6c9dbf3556be",
	},
	{
		name: "traitor",
		album: "sour",
		artist: "olivia rodrigo",
		savedOn: "may 18, 2022",
		duration: 229,
		img: "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a",
	},
	{
		name: "this side of paradise",
		album: "color",
		artist: "coyote theory",
		savedOn: "may 18, 2022",
		duration: 242,
		img: "https://i.scdn.co/image/ab67616d00004851d45404b4c5a5444cb06c9f7b",
	},
	{
		name: "moral of the story",
		album: "ashlyn",
		artist: "ashe",
		savedOn: "apr 20, 2022",
		duration: 201,
		img: "https://i.scdn.co/image/ab67616d00004851639c6811b5d0c6cfb145de3a",
	},
	{
		name: "play date",
		album: "cry baby (deluxe edition)",
		artist: "melanie martinez",
		savedOn: "apr 20, 2022",
		duration: 179,
		img: "https://i.scdn.co/image/ab67616d000048513899712512f50a8d9e01e951",
	},
	{
		name: "night changes",
		album: "four (deluxe)",
		artist: "one direction",
		savedOn: "apr 15, 2022",
		duration: 226,
		img: "https://i.scdn.co/image/ab67616d0000485134a29f220057810cce98e1b4",
	},
	{
		name: "deja vu",
		album: "sour",
		artist: "olivia rodrigo",
		savedOn: "apr 12, 2022",
		duration: 215,
		img: "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a",
	},
	{
		name: "walls could talk",
		album: "hopeless fountain kingdom (deluxe)",
		artist: "halsey",
		savedOn: "may 18, 2022",
		duration: 101,
		img: "https://i.scdn.co/image/ab67616d000048510f7ad6d8d829906c17cae210",
	},
	{
		name: "adore you",
		album: "fine line",
		artist: "harry styles",
		savedOn: "may 18, 2022",
		duration: 207,
		img: "https://i.scdn.co/image/ab67616d0000485125180571abce9472f61bd722",
	},
	{
		name: "you belong with me (taylor’s version)",
		album: "fearless (taylor's version)",
		artist: "taylor swift",
		savedOn: "may 18, 2022",
		duration: 231,
		img: "https://i.scdn.co/image/ab67616d00004851a48964b5d9a3d6968ae3e0de",
	},
	{
		name: "harleys in hawaii",
		album: "smile",
		artist: "katy perry",
		savedOn: "may 18, 2022",
		duration: 185,
		img: "https://i.scdn.co/image/ab67616d000048515ebe6cbd74a47a5e8ea88985",
	},
	{
		name: "good 4 u",
		album: "sour",
		artist: "olivia rodrigo",
		savedOn: "may 18, 2022",
		duration: 178,
		img: "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a",
	},
	{
		name: "middle of the night",
		album: "middle of the night",
		artist: "elley duhé",
		savedOn: "may 18, 2022",
		duration: 184,
		img: "https://i.scdn.co/image/ab67616d0000485153a2e11c1bde700722fecd2e",
	},
	{
		name: "idk you yet",
		album: "idk you yet (live on piano)",
		artist: "alexander 23",
		savedOn: "may 18, 2022",
		duration: 184,
		img: "https://i.scdn.co/image/ab67616d00004851fe03064db12346c962cd0c56",
	},
	{
		name: "10 things i hate about you",
		album: "10 things i hate about you",
		artist: "leah kate",
		savedOn: "jun 10, 2022",
		duration: 157,
		img: "https://i.scdn.co/image/ab67616d00004851596a9d381ffda7d97da5d702",
	},
	{
		name: "arcade",
		album: "small town boy (track by track)",
		artist: "duncan laurence",
		savedOn: "may 18, 2022",
		duration: 185,
		img: "https://i.scdn.co/image/ab67616d0000485159ce61a220822995a3ccd27f",
	},
	{
		name: "happier than ever - edit",
		album: "happier than ever (edit)",
		artist: "billie eilish",
		savedOn: "may 18, 2022",
		duration: 151,
		img: "https://i.scdn.co/image/ab67616d0000485131aa3ebe23f59778bff800c9",
	},
	{
		name: "walls could talk",
		album: "hopeless fountain kingdom (deluxe)",
		artist: "halsey",
		savedOn: "may 18, 2022",
		duration: 101,
		img: "https://i.scdn.co/image/ab67616d000048510f7ad6d8d829906c17cae210",
	},
	{
		name: "adore you",
		album: "fine line",
		artist: "harry styles",
		savedOn: "may 18, 2022",
		duration: 207,
		img: "https://i.scdn.co/image/ab67616d0000485125180571abce9472f61bd722",
	},
	{
		name: "you belong with me (taylor’s version)",
		album: "fearless (taylor's version)",
		artist: "taylor swift",
		savedOn: "may 18, 2022",
		duration: 231,
		img: "https://i.scdn.co/image/ab67616d00004851a48964b5d9a3d6968ae3e0de",
	},
	{
		name: "harleys in hawaii",
		album: "smile",
		artist: "katy perry",
		savedOn: "may 18, 2022",
		duration: 185,
		img: "https://i.scdn.co/image/ab67616d000048515ebe6cbd74a47a5e8ea88985",
	},
	{
		name: "good 4 u",
		album: "sour",
		artist: "olivia rodrigo",
		savedOn: "may 18, 2022",
		duration: 178,
		img: "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a",
	},
	{
		name: "stereo hearts (feat. adam levine)",
		album: "the papercut chronicles ii",
		artist: "gym class heroes, adam levine",
		savedOn: "apr 19, 2023",
		duration: 210,
		img: "https://i.scdn.co/image/ab67616d0000485118b8088fe0c3dbf78398b55a",
	},
	{
		name: "stressed out",
		album: "blurryface",
		artist: "twenty one pilots",
		savedOn: "apr 17, 2023",
		duration: 202,
		img: "https://i.scdn.co/image/ab67616d000048512df0d98a423025032d0db1f7",
	},
	{
		name: "be alright",
		album: "be alright",
		artist: "dean lewis",
		savedOn: "apr 17, 2023",
		duration: 196,
		img: "https://i.scdn.co/image/ab67616d0000485113480e8127119dcb882eb53d",
	},
	{
		name: "here with me",
		album: "here with me",
		artist: "d4vd",
		savedOn: "dec 22, 2022",
		duration: 242,
		img: "https://i.scdn.co/image/ab67616d00004851efbe96040319db682b438f11",
	},
	{
		name: "people you know",
		album: "rare",
		artist: "selena gomez",
		savedOn: "nov 21, 2022",
		duration: 194,
		img: "https://i.scdn.co/image/ab67616d000048512abcc266597eb46f897a8666",
	},
	{
		name: "space song",
		album: "depression cherry",
		artist: "beach house",
		savedOn: "nov 15, 2022",
		duration: 320,
		img: "https://i.scdn.co/image/ab67616d0000485102859310b61e59756abb90ad",
	},
	{
		name: "somewhere only we know",
		album: "hopes and fears",
		artist: "keane",
		savedOn: "sep 11, 2022",
		duration: 237,
		img: "https://i.scdn.co/image/ab67616d000048517d6cd95a046a3c0dacbc7d33",
	},
	{
		name: "under the influence",
		album: "indigo (extended)",
		artist: "chris brown",
		savedOn: "sep 2, 2022",
		duration: 184,
		img: "https://i.scdn.co/image/ab67616d0000485148f69a441c575fa5926a0831",
	},
	{
		name: "until i found you (with em beihold) - em beihold version",
		album: "until i found you (em beihold version)",
		artist: "stephen sanchez, em beihold",
		savedOn: "aug 17, 2022",
		duration: 176,
		img: "https://i.scdn.co/image/ab67616d000048512bf0876d42b90a8852ad6244",
	},
	{
		name: "wildest dreams (taylor's version)",
		album: "wildest dreams (taylor's version)",
		artist: "taylor swift",
		savedOn: "jun 19, 2022",
		duration: 220,
		img: "https://i.scdn.co/image/ab67616d00004851eb10050f6fe8e2783a91a4b1",
	},
	{
		name: "strawberries & cigarettes",
		album: "strawberries & cigarettes",
		artist: "troye sivan",
		savedOn: "jun 19, 2022",
		duration: 201,
		img: "https://i.scdn.co/image/ab67616d00004851c9eb4c87e1d7f5353908b712",
	},
	{
		name: "love me back (fayahh beat)",
		album: "love me back (fayahh beat)",
		artist: "trinidad cardona, robinson",
		savedOn: "jun 18, 2022",
		duration: 193,
		img: "https://i.scdn.co/image/ab67616d00004851b9b96725f63295f1ac93e964",
	},
	{
		name: "stereo hearts (feat. adam levine)",
		album: "the papercut chronicles ii",
		artist: "gym class heroes, adam levine",
		savedOn: "apr 19, 2023",
		duration: 210,
		img: "https://i.scdn.co/image/ab67616d0000485118b8088fe0c3dbf78398b55a",
	},
	{
		name: "stressed out",
		album: "blurryface",
		artist: "twenty one pilots",
		savedOn: "apr 17, 2023",
		duration: 202,
		img: "https://i.scdn.co/image/ab67616d000048512df0d98a423025032d0db1f7",
	},
	{
		name: "be alright",
		album: "be alright",
		artist: "dean lewis",
		savedOn: "apr 17, 2023",
		duration: 196,
		img: "https://i.scdn.co/image/ab67616d0000485113480e8127119dcb882eb53d",
	},
	{
		name: "here with me",
		album: "here with me",
		artist: "d4vd",
		savedOn: "dec 22, 2022",
		duration: 242,
		img: "https://i.scdn.co/image/ab67616d00004851efbe96040319db682b438f11",
	},
	{
		name: "people you know",
		album: "rare",
		artist: "selena gomez",
		savedOn: "nov 21, 2022",
		duration: 194,
		img: "https://i.scdn.co/image/ab67616d000048512abcc266597eb46f897a8666",
	},
	{
		name: "space song",
		album: "depression cherry",
		artist: "beach house",
		savedOn: "nov 15, 2022",
		duration: 320,
		img: "https://i.scdn.co/image/ab67616d0000485102859310b61e59756abb90ad",
	},
	{
		name: "stereo hearts (feat. adam levine)",
		album: "the papercut chronicles ii",
		artist: "gym class heroes, adam levine",
		savedOn: "apr 19, 2023",
		duration: 210,
		img: "https://i.scdn.co/image/ab67616d0000485118b8088fe0c3dbf78398b55a",
	},
	{
		name: "stressed out",
		album: "blurryface",
		artist: "twenty one pilots",
		savedOn: "apr 17, 2023",
		duration: 202,
		img: "https://i.scdn.co/image/ab67616d000048512df0d98a423025032d0db1f7",
	},
	{
		name: "be alright",
		album: "be alright",
		artist: "dean lewis",
		savedOn: "apr 17, 2023",
		duration: 196,
		img: "https://i.scdn.co/image/ab67616d0000485113480e8127119dcb882eb53d",
	},
	{
		name: "stereo hearts (feat. adam levine)",
		album: "the papercut chronicles ii",
		artist: "gym class heroes, adam levine",
		savedOn: "apr 19, 2023",
		duration: 210,
		img: "https://i.scdn.co/image/ab67616d0000485118b8088fe0c3dbf78398b55a",
	},
	{
		name: "stereo hearts (feat. adam levine)",
		album: "the papercut chronicles ii",
		artist: "gym class heroes, adam levine",
		savedOn: "apr 19, 2023",
		duration: 210,
		img: "https://i.scdn.co/image/ab67616d0000485118b8088fe0c3dbf78398b55a",
	},
];
const results = [];
const processing = {
	searched: false,
	songPage: false,
	matching: false,
	context: false,
	playlist: false,
	save: false,
};

// const playlist = getPlaylist();
let playlist_name = Date.now().toString();
// await createYTPlaylist(playlist_name);
async function waitTillLoading(query = "yt-page-navigation-progress[hidden]") {
	await new Promise((r) => setTimeout(() => r(), 10));
	while (!document.querySelector(query)) {
		await new Promise((r) => setTimeout(() => r(), 10));
	}
}
// await waitTillLoading("ytmusic-editable-playlist-detail-header-renderer");
async function matchSong(track) {
	await waitTillLoading("ytmusic-tabbed-search-results-renderer");
	let list = Array.from(Array.from(document.querySelectorAll("#contents > ytmusic-shelf-renderer > div > #contents"))?.pop()?.children || []);

	while (list.length == 0 || !list[0].innerText) {
		await new Promise((r) => setTimeout(() => r(), 100));
		list = Array.from(Array.from(document.querySelectorAll("#contents > ytmusic-shelf-renderer > div > #contents"))?.pop()?.children || []);
	}
	const res = list.map((ele, i) => {
		const track = {
			name: "",
			album: "",
			artist: "",
			duration: "",
			id: i,
		};
		const qry = ele.querySelectorAll("yt-formatted-string");
		track.name = qry[0]?.innerText || "";
		const [artist_container, album_container] = qry[1].querySelectorAll("a");
		track.artist = artist_container?.innerText;
		track.album = album_container?.innerText;
		track.duration = qry[1].lastElementChild?.innerText;
		track.duration = track.duration.split(":").reduce((acc, x) => 60 * acc + parseInt(x), 0);
		// console.log(track.duration, qry[1].lastElementChild?.innerText);
		Object.keys(track).forEach((key) => {
			track[key] = track[key]?.toString().toLowerCase();
		});
		track.duration = parseInt(track.duration);
		return track;
	});
	const match = (x, key) => x[key]?.includes(track[key]) || track[key]?.includes(x[key]);
	// console.log(res);
	const same_artist = new Set(res.filter((x) => match(x, "artist")).map((x) => x.id));
	const same_song = new Set(res.filter((x) => match(x, "name")).map((x) => x.id));
	const same_album = new Set(res.filter((x) => match(x, "album")).map((x) => x.id));
	const same_dur = new Set(res.filter((x) => Math.abs(x.duration - track.duration) < 10).map((x) => x.id));
	function intersect(...arrs) {
		if (arrs.length < 2) {
			return new Set([]);
		} else if (arrs.length == 2) {
			return new Set([...arrs[0]].filter((x) => arrs[1].has(x)));
		} else {
			const first = arrs[0];
			const sec = intersect(arrs.slice(1));
			return new Set([...first].filter((x) => sec.has(x)));
		}
	}
	function union(a, b) {
		return new Set([...a, ...b]);
	}
	let prev = new Set([]);
	const high_low = [intersect(same_artist, same_song, same_album, same_dur), intersect(same_artist, same_song, same_dur), intersect(same_artist, same_album, same_dur), intersect(same_artist, same_song, same_album), intersect(same_song, same_album, same_dur), intersect(same_artist, same_dur), intersect(same_artist, same_song), intersect(same_song, same_album), intersect(same_song, same_dur), intersect(same_artist, same_album)].map((x) => {
		prev.forEach((y) => x.delete(y));
		prev = union(prev, x);
		return x;
	});

	return {
		match: prev ? res[Array.from(prev)[0]] : null,
		oth: high_low,
		res,
		list,
	};
}

// addSongsToPlaylist();
const steps = ["Navigating to Library", "Filter by Playlists", "New Playlist", "Configuring Playlist", "Creating Playlist"];
const trackSteps = ["Search for Track", "Filter by Songs", "Match Track", "Open Context Menu", "Add to Playlist"];
function App() {
	const [globalSteps, setGlobalSteps] = useState(0);
	const [playlistName, setPlaylistName] = useState(Date.now().toString());
	const [failedSteps, setFailedSteps] = useState({});
	const [failedTracks, setFailedTracks] = useState(new Set([]));
	const [tab, setTab] = useState("ytm");
	const [page, setPage] = useState("unknown");
	const [songs, setSongs] = useState([]);
	const [isSpotifyPlaylistPage, setIsSpotifyPlaylistPage] = useState(false);
	async function getPlaylist() {
		document.querySelectorAll("div[data-overlayscrollbars-viewport]")[1].scrollTop = 0;
		const res = [];
		const container = document.getElementById("symply-ct-spty-scroll-container");
		setSongs([]);
		let added = true;
		let dist = 56;
		while (added) {
			added = false;
			let y = Array.from(document.querySelectorAll('div[data-testid="tracklist-row-placeholder"]')).filter((y) => y.children.length == 7 && y.getBoundingClientRect().top < window.innerHeight && y.getBoundingClientRect().bottom > 0);
			console.log("placeholders", y.length);
			while (y.length > 2) {
				await new Promise((r) => setTimeout(() => r(), 10));
				y = Array.from(document.querySelectorAll('div[data-testid="tracklist-row-placeholder"]')).filter((y) => y.children.length == 7 && y.getBoundingClientRect().top < window.innerHeight && y.getBoundingClientRect().bottom > 0);
			}
			let x = Array.from(document.querySelectorAll('div[data-testid="tracklist-row"]')).filter((y) => y.children.length == 5);
			if (res.length == 0) {
				while (x.length == 0 || x[0].firstElementChild?.innerText != "1") {
					console.log("loop");
					await new Promise((r) => setTimeout(() => r(), 10));
					document.querySelectorAll("div[data-overlayscrollbars-viewport]")[1].scrollTop = 0;
					x = Array.from(document.querySelectorAll('div[data-testid="tracklist-row"]')).filter((y) => y.children.length == 5);
				}
			}
			if (x.length > 1) {
				dist = Math.abs(x[1].getBoundingClientRect().top - x[0].getBoundingClientRect().top);
				if (dist < 10 || dist > 120) {
					dist = 56;
				}
			}
			for (let i = 0; i < x.length; i++) {
				const e = x[i];
				if (e.firstElementChild?.innerText != res.length + 1) {
					continue;
				}
				const track = {
					name: "",
					album: "",
					artist: "",
					savedOn: "",
					duration: "",
					img: "",
					no: e.firstElementChild?.innerText,
				};
				track.img = e.children[1]?.firstElementChild?.src ?? "";
				const name_artist = e.children[1]?.lastElementChild;
				if (name_artist) {
					track.name = name_artist?.firstElementChild?.innerText ?? "";
					track.artist = name_artist?.lastElementChild?.innerText ?? "";
				}
				track.album = e.children[2]?.innerText ?? "";
				track.savedOn = e.children[3]?.innerText ?? "";
				track.duration = e.children[4]?.innerText ?? "";
				// Object.keys(track).forEach((key) => {
				// 	track[key] = track[key]?.toString().toLowerCase();
				// });
				track.duration = track.duration.split(":").reduce((acc, x) => 60 * acc + parseInt(x), 0);
				setSongs((prev) => [...prev, track]);
				res.push(track);
				setTimeout(() => {
					container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
				}, 200);
				added = true;
			}
			document.querySelectorAll("div[data-overlayscrollbars-viewport]")[1].scrollTop = dist * res.length;
			await new Promise((r) => setTimeout(() => r(), 100));
		}
		function safeBtoa(str) {
			const bytes = new TextEncoder().encode(str);
			const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
			return btoa(binString);
		}
		console.log(safeBtoa(JSON.stringify(res)));
		console.log(res);
		setGlobalSteps(0);
		setTimeout(() => {
			container.scrollTo({ top: 0, behavior: "smooth" });
		}, 200);
		document.getElementById("export-button")?.classList.add("sdwflash");
		return res;
	}
	useEffect(() => {
		let y = null;
		if (window.location.host.includes("spotify")) {
			if (location.pathname.includes("playlist")) {
				setIsSpotifyPlaylistPage(true);
			}
			y = (e) => {
				const url = new URL(e.destination.url);
				setPage(url.host);
				if (url.pathname.includes("playlist")) {
					setIsSpotifyPlaylistPage(true);
				} else {
					setIsSpotifyPlaylistPage(false);
				}
			};
			navigation.addEventListener("navigate", y);
		}
		return () => {
			if (y) {
				navigation.removeEventListener("navigate", y);
				y = null;
			}
		};
	}, []);
	useEffect(() => {
		setPage(window.location.host);
		setTab(window.location.host.includes("spotify") ? "spty" : window.location.host.includes("youtube") ? "ytm" : tab);
	}, [page]);
	const totalSteps = globalSteps;
	function importConfig() {
		const input = document.createElement("input");
		input.type = "file";
		input.accept = "application/json";
		input.onchange = (e) => {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = JSON.parse(e.target.result);
				if (data.songs) setSongs(data.songs);
			};
			reader.readAsText(file);
		};
		input.click();
	}
	async function createYTPlaylist(name) {
		if (!location.pathname.startsWith("/library")) {
			Array.from(document.querySelectorAll("tp-yt-paper-item"))
				.find((x) => x.innerText == "Library")
				?.click();
			await waitTillLoading();
		}
		setGlobalSteps(2);
		if (location.pathname != "/library/playlists") {
			Array.from(document.querySelectorAll("iron-selector > ytmusic-chip-cloud-chip-renderer"))
				.find((x) => x.innerText == "Playlists")
				?.click();
			await waitTillLoading();
		}
		setGlobalSteps(3);
		let x = document.querySelector('a[title="New playlist"]');
		x.click();
		// let x = document.querySelector('label[for="input-2"]')
		// x.nextElementSibling.firstElementChild.value = Date.now()
		x = null;
		while (!x) {
			x = Array.from(document.querySelectorAll("label")).find((el) => el.textContent.trim() === "Title")?.nextElementSibling.firstElementChild;
			await new Promise((r) => setTimeout(() => r(), 10));
		}
		setGlobalSteps(4);
		x.value = name;
		x.dispatchEvent(new Event("input", { bubbles: true }));
		x = document.querySelector('button[aria-label="Create"]');
		x.click();
		setGlobalSteps(5);
		await waitTillLoading();
		await waitTillLoading("ytmusic-editable-playlist-detail-header-renderer");
		setGlobalSteps(6);
	}
	async function searchTrack(track, temp, playlist_name) {
		Object.keys(track).forEach((key) => {
			if (key != "duration") track[key] = track[key]?.toString().toLowerCase();
		});
		const input = document.querySelector('input[id="input"]');
		// Ensure element is focused
		input.focus();
		input.value = track.name;
		input.dispatchEvent(new Event("input", { bubbles: true }));
		const options = { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true };
		// Dispatch all three events in sequence
		input.dispatchEvent(new KeyboardEvent("keydown", options));
		input.dispatchEvent(new KeyboardEvent("keypress", options));
		input.dispatchEvent(new KeyboardEvent("keyup", options));
		await waitTillLoading();
		setGlobalSteps((prev) => {
			temp.globalSteps = prev - (prev % 5) + 2;
			return temp.globalSteps;
		});
		//alert("Song searched");
		document.querySelector('a[title="Show song results"]').click();
		await waitTillLoading();
		setGlobalSteps((prev) => {
			temp.globalSteps = prev - (prev % 5) + 3;
			return temp.globalSteps;
		});
		//alert("Song results shown");
		const res = await matchSong(track);
		//alert(res.match ? "Song matched, adding to playlist" : "No match found, skipping song");
		if (res.match) {
			console.log("matched", track, res.match);
			const ele = res.list[res.match.id];
			setGlobalSteps((prev) => {
				temp.globalSteps = prev - (prev % 5) + 4;
				return temp.globalSteps;
			});
			const contextMenuEvent = new MouseEvent("contextmenu", {
				bubbles: true,
				cancelable: true,
				view: window,
				buttons: 2,
			});
			ele.dispatchEvent(contextMenuEvent);
			await new Promise((r) => setTimeout(() => r(), 25));
			await waitTillLoading("ytmusic-menu-popup-renderer");
			//alert("Context menu opened");
			Array.from(document.querySelectorAll("a > yt-formatted-string"))
				.find((x) => x.innerText == "Save to playlist")
				?.click();
			await new Promise((r) => setTimeout(() => r(), 25));
			await waitTillLoading("ytmusic-add-to-playlist-renderer");
			//alert("Add to playlist menu opened");
			document.querySelector("ytmusic-add-to-playlist-renderer")?.querySelector(`button[aria-label="${playlist_name} "]`)?.click();
			setGlobalSteps((prev) => {
				temp.globalSteps = prev - (prev % 5) + 5;
				return temp.globalSteps;
			});
			// Array.from(document.querySelectorAll("yt-formatted-string"))
			// 	.filter((x) => x.innerText == playlist_name)
			// 	?.pop()
			// 	?.click();
		}
	}
	async function addSongsToPlaylist(playlistName) {
		const temp = {
			globalSteps: 5,
			failedSteps: {},
			failedTracks: new Set([]),
		};
		setFailedSteps({});
		setFailedTracks(new Set([]));
		const songHeight = (document.getElementById("symply-ct-song-1-steps")?.getBoundingClientRect().bottom || 0) - (document.getElementById("symply-ct-song-1")?.getBoundingClientRect().top || 0);
		for (let i = 0; i < songs.length; i++) {
			try {
				setGlobalSteps((prev) => {
					temp.globalSteps = 5 * (i + 1) + 1;
					return temp.globalSteps;
				});
				await searchTrack(songs[i], temp, playlistName);
			} catch (e) {
				setFailedSteps((prev) => {
					const count = temp.globalSteps - 5 * (i + 1);
					return { ...prev, [i]: { count, error: e } };
				});
				setFailedTracks((prev) => new Set([...prev, i]));
				console.log("error at ", songs[i], e);
			}
			await new Promise((r) => setTimeout(() => r(), 100));
			let container = document.getElementById("symply-ct-scroll-container");
			if (container) {
				container.scrollTo({ top: (songHeight || 76) * i, behavior: "smooth" });
			}
			await new Promise((r) => setTimeout(() => r(), 500));
		}
		setGlobalSteps((prev) => {
			temp.globalSteps = 5 * (songs.length + 1) + 5;
			return temp.globalSteps;
		});
	}
	useEffect(() => {
		if (page == ytHost) {
			if (globalSteps == 1) {
				const now = Date.now().toString();
				setPlaylistName(now);
				createYTPlaylist(now);
			}
			if (globalSteps == 6) {
				addSongsToPlaylist(playlistName);
			}
		} else // if (page == sptyHost)
		{
			if (globalSteps == 1) {
				const container = document.getElementById("symply-ct-spty-scroll-container");
				setTimeout(() => {
					getPlaylist();
					// setInterval(() => {
					// 	setSongs((prev) => [...prev, songs2[prev.length]]);

					// }, 1000);
				}, 500);
			}
		}
	}, [globalSteps, page]);
	function useStyles(str, sp = true) {
		let res = {};
		let missing = [];
		for (let key of str.split(" ")) {
			const cur = styleFromClass(key);
			if (cur) {
				res = { ...res, ...cur };
			} else {
				missing.push(key);
			}
		}
		console.log(missing);
		if (sp) {
			console.log(res);
		}
		return res;
	}
	return (
		<>
			<div style={styles.card}>
				<div style={{ ...styles.cardSubBody, opacity: tab == "set" || songs.length || globalSteps ? 1 : 0, transitionDuration: "500ms", transitionProperty: "all" }}>
					<div
						className="dancing-script-semibold"
						style={{
							fontSize: "36px",
							lineHeight: "1.1112",
						}}>
						symply CT
					</div>
					<div
						style={{
							display: "flex",
							marginTop: "calc(1 * 2 * 4px)",
							marginBottom: "calc(-1 * 1 * 4px)",
							alignItems: "center",
							justifyContent: "center",
							scale: "calc(80/100)",
							gap: "calc(6 * 4px)",
						}}>
						<button
							sym="true"
							className="group"
							style={styles.topButtonSubtle}
							disabled={!!globalSteps}
							onClick={() => {
								setSongs([]);
								setFailedSteps({});
								setFailedTracks(new Set([]));
								setGlobalSteps(0);
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban-icon lucide-ban">
								<circle cx="12" cy="12" r="10" />
								<path d="M4.929 4.929 19.07 19.071" />
							</svg>
							<label
								className="group-hover:opacity-100 opacity-0"
								style={{
									position: "absolute",
									left: "calc( -1 * 2 * 4px)",
									top: "calc( 1 * 2 * 4px)",
									transform: "translateX(-100%)",
									transitionDuration: "200ms",
									pointerEvents: "none",
									height: "calc(0 * 4px)",
								}}>
								Clear
							</label>
						</button>
						<button
							sym="true"
							onClick={() => {
								setGlobalSteps((prev) => prev || 1);
							}}
							className="group"
							style={{
								backgroundColor: "#8b85a1",
								padding: "calc(2 * 4px)",
								marginTop: "calc(-1 * 5 * 4px)",
								color: "#0c0b0f",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: "8px",
								scale: "calc(120/100)",
							}}>
							<div className="flex w-[24px] gap-[8px] h-[24px] flex-col items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									style={{
										minWidth: "100%",
										minHeight: "100%",
										transitionDuration: "500ms",
										transitionProperty: "all",
										marginTop: globalSteps ? "-32px" : "0",
										filter: globalSteps ? "blur(4px)" : "none",
									}}
									minWidth="24"
									minHeight="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-play-icon lucide-play">
									<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
								</svg>
								<svg
									style={{
										minWidth: "100%",
										minHeight: "100%",
										transitionDuration: "500ms",
										transitionProperty: "all",
										filter: !globalSteps ? "blur(4px)" : "none",
									}}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-pause-icon lucide-pause">
									<rect x="14" y="3" width="5" height="18" rx="1" />
									<rect x="5" y="3" width="5" height="18" rx="1" />
								</svg>
							</div>
							<label
								className="group-hover:opacity-100 opacity-0 dancing-script-medium "
								style={{
									position: "absolute",
									bottom: "calc( 1 * 0 * 4px)",
									fontSize: "20px",
									lineHeight: "1.4",
									marginBottom: "calc(-1 * 3 * 4px)",
									transform: "translateY(100%)",
									color: "#cac1ec",
									transitionDuration: "200ms",
									pointerEvents: "none",
								}}>
								Start
							</label>
						</button>
						<button
							className="group"
							id="export-button"
							sym="true"
							disabled={!!globalSteps}
							onClick={(e) => {
								e.currentTarget.classList.remove("sdwflash");
								if (page == spotifyHost && songs.length) {
									const json = {
										songs,
										timestamp: Date.now(),
										ver: 1,
									};
									const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
									const url = URL.createObjectURL(blob);
									const a = document.createElement("a");
									a.href = url;
									a.download = `symply-ct-${Date.now()}.json`;
									a.click();
									URL.revokeObjectURL(url);
								} else if (page == ytHost) {
									importConfig();
								}
							}}
							style={{
								color: "rgba(139, 133, 161, 0.75)",
								backgroundColor: "#211f24",
								padding: "calc(2 * 4px)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: "8px",
								scale: "calc(100/100)",
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-import-icon lucide-import">
								<path d="M12 3v12" />
								<path d="m8 11 4 4 4-4" />
								<path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
							</svg>
							<label
								className="group-hover:opacity-100 opacity-0"
								style={{
									position: "absolute",
									right: "calc( -1 * 2 * 4px)",
									top: "calc( 1 * 2 * 4px)",
									transform: "translateX(100%)",
									transitionDuration: "200ms",
									pointerEvents: "none",
									height: "calc(0 * 4px)",
								}}>
								{page == spotifyHost ? "Export" : "Import"}
							</label>
						</button>
					</div>
				</div>
				<div style={styles.cardBody}>
					<div
						key="ytm"
						style={{
							minWidth: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							overflow: "hidden",
							overflowY: "auto",
							marginLeft: tab == "ytm" ? "0" : tab == "spty" ? "-100%" : "-200%",
							transitionDuration: "500ms",
							transitionProperty: "all",
							paddingBottom: "64px",
						}}
						id="symply-ct-scroll-container">
						{page == ytHost ? <YT {...{ globalSteps, setGlobalSteps, totalSteps, failedTracks, steps, trackSteps, songs, importConfig ,tab }} /> : <Unknown routeTo={ytURL} />}
					</div>
					<div
						key="spty"
						style={{
							minWidth: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							overflow: "hidden",
							overflowY: "auto",
							paddingBottom: "64px",
						}}
						id="symply-ct-spty-scroll-container">
						{page == spotifyHost ? <Spotify {...{ globalSteps, setGlobalSteps, songs, setSongs, isSpotifyPlaylistPage: isSpotifyPlaylistPage, tab }} /> : <Unknown routeTo={spotifyURL} />}
					</div>
					<div
						key="set"
						style={{
							minWidth: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							overflow: "hidden",
							overflowY: "auto",
							paddingBottom: "64px",
						}}>
						{page == ytHost ? <YT {...{ globalSteps, setGlobalSteps, totalSteps, failedTracks, steps, trackSteps, songs, importConfig ,tab }} /> : <Unknown routeTo={ytURL} />}
					</div>
				</div>
				<div key="tabs" className="flex items-center justify-between gap-[8px] bg-background/90 backdrop-blur-3xl backdrop-brightness-20" style={{ width: "96%", minHeight: "64px", marginTop: "-64px", padding: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", borderColor: "rgba(202, 193, 236, 0.4)" }}>
					{/* <button style={styles.controlButton} onClick={() => setGlobalSteps((prev) => Math.max(prev - 1, 0))}>
						-
					</button>
					<button style={styles.controlButton} onClick={() => setGlobalSteps((prev) => Math.min(prev + 1, 9999))}>
						+
					</button> */}
					<button
						key="ytm"
						sym="true"
						onClick={() => setTab("ytm")}
						className="w-1/3 text-white hover:bg-destructive hover:text-background h-full flex font-bold items-center justify-center gap-[8px] rounded-[10px]"
						style={{
							background: tab == "ytm" ? "var(--destructive)" : "",
							transitionDuration: "500ms",
							transitionProperty: "all",
							color: tab == "ytm" ? "var(--background)" : "",
							filter: tab == "ytm" ? "drop-shadow(0 0 8px var(--destructive)) brightness(100%)" : "drop-shadow(0 0 0px var(--destructive)) brightness(70%)",
						}}>
						<div
							className="outline outline-[#ff0033] text-white p-[5px] rounded-full"
							style={{
								background: "#fd2b2b",
								padding: "5px",
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-[16px] w-[16px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music2-icon lucide-music-2">
								<circle cx="8" cy="18" r="4" />
								<path d="M12 18V2l7 4" />
							</svg>
						</div>
						YT Music
					</button>
					<button
						key="spty"
						sym="true"
						onClick={() => setTab("spty")}
						className="w-1/3 text-white hover:bg-success hover:text-background h-full flex font-bold items-center justify-center gap-[8px] rounded-[10px]"
						style={{
							background: tab == "spty" ? "var(--success)" : "",
							transitionDuration: "500ms",
							transitionProperty: "all",
							color: tab == "spty" ? "var(--background)" : "",

							filter: tab == "spty" ? "drop-shadow(0 0 8px var(--success)) brightness(100%)" : "drop-shadow(0 0 0px var(--success)) brightness(70%)",
						}}>
						<div
							style={{
								background: "#1ed660",
								padding: "5px",
							}}
							className="bg-[#1ed660] outline outline-[#3be479] text-black p-[5px] rotate-95 rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-[16px] w-[16px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines-icon lucide-audio-lines">
								<path d="M2 10v3" />
								<path d="M6 6v11" />
								<path d="M10 3v18" />
								<path d="M14 8v7" />
								<path d="M18 5v13" />
								<path d="M22 10v3" />
							</svg>
						</div>
						Spotify
					</button>
					<button
						key="set"
						sym="true"
						onClick={() => setTab("set")}
						className="w-1/3 text-white hover:bg-muted hover:text-background h-full flex font-bold items-center justify-center gap-[8px] rounded-[10px]"
						style={{
							background: tab == "set" ? "var(--accent)" : "",
							transitionDuration: "500ms",
							transitionProperty: "all",
							color: tab == "set" ? "var(--background)" : "",
							filter: tab == "set" ? "drop-shadow(0 0 8px var(--accent)) brightness(100%)" : "drop-shadow(0 0 0px var(--accent)) brightness(70%)",
						}}>
						<div
							style={{
								background: "var(--card)",
								padding: "5px",
							}}
							className="bg-card outline outline-muted text-accent p-[5px] rounded-[10px]">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-[16px] w-[16px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal-icon lucide-sliders-horizontal">
								<path d="M10 5H3" />
								<path d="M12 19H3" />
								<path d="M14 3v4" />
								<path d="M16 17v4" />
								<path d="M21 12h-9" />
								<path d="M21 19h-5" />
								<path d="M21 5h-7" />
								<path d="M8 10v4" />
								<path d="M8 12H3" />
							</svg>
						</div>
						Settings
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
