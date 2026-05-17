import { useEffect, useState } from "react";
import { styles } from "./css";

const songs = [
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
async function searchTrack(track) {
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
	//alert("Song searched");
	document.querySelector('a[title="Show song results"]').click();
	await waitTillLoading();
	//alert("Song results shown");
	const res = await matchSong(track);
	//alert(res.match ? "Song matched, adding to playlist" : "No match found, skipping song");
	if (res.match) {
		console.log("matched", track, res.match);
		const ele = res.list[res.match.id];
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
		// Array.from(document.querySelectorAll("yt-formatted-string"))
		// 	.filter((x) => x.innerText == playlist_name)
		// 	?.pop()
		// 	?.click();
	}
}

async function addSongsToPlaylist() {
	for (let i = 0; i < songs.length; i++) {
		try {
			await searchTrack(songs[i]);
		} catch (e) {
			console.log("error at ", songs[i], e);
		}
		await new Promise((r) => setTimeout(() => r(), 100));
	}
}
// addSongsToPlaylist();
function App() {
	const [globalSteps, setGlobalSteps] = useState(0);
	const [playlistSteps, setPlaylistSteps] = useState(0);
	const [hoveredButton, setHoveredButton] = useState(null);
	const [activeButton, setActiveButton] = useState(null);
	async function createYTPlaylist(name) {
		setPlaylistSteps(2);
		if (!location.pathname.startsWith("/library")) {
			Array.from(document.querySelectorAll("tp-yt-paper-item"))
				.find((x) => x.innerText == "Library")
				?.click();
			await waitTillLoading();
		}
		if (location.pathname != "/library/playlists") {
			Array.from(document.querySelectorAll("iron-selector > ytmusic-chip-cloud-chip-renderer"))
				.find((x) => x.innerText == "Playlists")
				?.click();
			await waitTillLoading();
		}
		setPlaylistSteps(3);
		let x = document.querySelector('a[title="New playlist"]');
		x.click();
		// let x = document.querySelector('label[for="input-2"]')
		// x.nextElementSibling.firstElementChild.value = Date.now()
		x = null;
		while (!x) {
			x = Array.from(document.querySelectorAll("label")).find((el) => el.textContent.trim() === "Title")?.nextElementSibling.firstElementChild;
			await new Promise((r) => setTimeout(() => r(), 10));
		}

		x.value = name;
		x.dispatchEvent(new Event("input", { bubbles: true }));
		x = document.querySelector('button[aria-label="Create"]');
		x.click();
		await waitTillLoading();
		await waitTillLoading("ytmusic-editable-playlist-detail-header-renderer");
		setPlaylistSteps(4);
	}
	// useEffect(() => {
	// 	if (globalSteps === 1) {
	// 		setTimeout(() => setGlobalSteps(2), 500);
	// 		return;
	// 	}
	// 	if (globalSteps === 2) {
	// 		setPlaylistSteps(1);
	// 	}
	// 	if (globalSteps === 3) {
	// 	}
	// }, [globalSteps]);
	// useEffect(() => {
	// 	if (playlistSteps === 1) {
	// 		setTimeout(() => createYTPlaylist(playlist_name), 500);
	// 		return;
	// 	}
	// 	if (playlistSteps === 4) {
	// 		setTimeout(() => setGlobalSteps(3), 500);
	// 		return;
	// 	}
	// }, [playlistSteps]);

	// const glboalStepsDisplay = (
	// 	<div style={{ ...styles.stepsContainer, marginBottom: "2.5rem" }}>
	// 		<div style={styles.stepsRow}>
	// 			<div
	// 				style={{
	// 					...styles.progressFill,
	// 					minWidth: `calc(${globalSteps > 3 ? 7 : globalSteps > 2 ? 5 : globalSteps > 1 ? 2 : 0} / 7 * 100%)`,
	// 				}}
	// 			/>
	// 			<div style={styles.progressTick} />
	// 			<div style={styles.progressRemaining} />{" "}
	// 		</div>
	// 		<div style={styles.stepsLabelsRow}>
	// 			<span
	// 				style={{
	// 					...styles.stepLabelLeft,
	// 					color: globalSteps >= 1 ? theme.accent : undefined,
	// 				}}>
	// 				Begin
	// 			</span>

	// 			<span
	// 				style={{
	// 					...styles.stepLabelRight,
	// 					color: globalSteps >= 4 ? theme.accent : undefined,
	// 				}}>
	// 				Done
	// 			</span>
	// 		</div>
	// 		<div style={styles.stepsDividerRow}>
	// 			<div
	// 				style={{
	// 					...styles.stepColumn,
	// 					color: globalSteps >= 2 ? theme.accent : undefined,
	// 				}}>
	// 				<div>|</div>
	// 				Create Playlist
	// 			</div>
	// 			<div
	// 				style={{
	// 					...styles.stepColumn,
	// 					color: globalSteps >= 3 ? theme.accent : undefined,
	// 				}}>
	// 				<div>|</div>
	// 				Add Songs
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	// const playlistStepsDisplay = (
	// 	<div style={styles.stepsContainer}>
	// 		<div style={styles.stepsRow}>
	// 			<div
	// 				style={{
	// 					...styles.progressFill,
	// 					minWidth: `calc(${playlistSteps > 3 ? 7 : playlistSteps > 2 ? 5 : playlistSteps > 1 ? 2 : 0} / 7 * 100%)`,
	// 				}}
	// 			/>
	// 			<div style={styles.progressTick} />
	// 			<div style={styles.progressRemaining} />{" "}
	// 		</div>
	// 		<div style={styles.stepsLabelsRow}>
	// 			<span
	// 				style={{
	// 					...styles.stepLabelLeft,
	// 					color: playlistSteps >= 1 ? theme.accent : undefined,
	// 				}}>
	// 				Begin
	// 			</span>

	// 			<span
	// 				style={{
	// 					...styles.stepLabelRight,
	// 					color: playlistSteps >= 4 ? theme.accent : undefined,
	// 				}}>
	// 				Done
	// 			</span>
	// 		</div>
	// 		<div style={styles.playlistDividerRow}>
	// 			<div style={styles.playlistSpacerLeft} />
	// 			<div
	// 				style={{
	// 					...styles.playlistStepColumnLeft,
	// 					color: playlistSteps >= 2 ? theme.accent : undefined,
	// 				}}>
	// 				<div>|</div>
	// 				<div style={styles.nowrap}>Goto Playlists</div>
	// 			</div>
	// 			<div style={styles.playlistSpacerRight} />

	// 			<div
	// 				style={{
	// 					...styles.playlistStepColumnRight,
	// 					color: playlistSteps >= 3 ? theme.accent : undefined,
	// 				}}>
	// 				<div>|</div>
	// 				<div style={styles.nowrap}>Create Playlist</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	return (
		<>
			<div style={styles.card} className="backdrop-blur-lg">
				<div style={styles.cardBody}>
					<div className="my-6 text-accent/80 dancing-script-semibold text-4xl rounded ">symply CT</div>
					{/* <div className="mt-2 text-accent/80  text-xs  ">Do not interact with the page or switch tabs when the process is running.</div> */}
					<div className="flex my-6 items-center justify-center  gap-6">
						<button className="text-muted/50 group bg-card p-2 flex items-center justify-center rounded-lg scale-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban-icon lucide-ban">
								<circle cx="12" cy="12" r="10" />
								<path d="M4.929 4.929 19.07 19.071" />
							</svg>
							<label className="absolute bottom-0 translate-y-full opacity-0 group-hover:opacity-100 duration-200 pointer-events-none">Clear</label>
						</button>
						<button className="bg-muted p-2 -mt-5 flex items-center justify-center rounded-lg scale-120">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play">
								<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
							</svg>
							<label className="absolute bottom-0 dancing-script-medium text-xl -mb-1 translate-y-full text-accent duration-200 pointer-events-none">Start</label>
						</button>
						<button className="text-muted/50 bg-card p-2 group flex items-center justify-center rounded-lg scale-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-import-icon lucide-import">
								<path d="M12 3v12" />
								<path d="m8 11 4 4 4-4" />
								<path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
							</svg>
							<label className="absolute bottom-0 translate-y-full opacity-0 group-hover:opacity-100 duration-200 pointer-events-none">Import</label>
						</button>
					</div>
					<div className="mt-4 w-full flex gap-2">
						<label className="text-muted/50 font-semibold">Configure & Create a Playlist</label>
					</div>
					<div className="w-full pointer-events-none h-10 px-2">
						<div className="flex -mb-4 mt-10 w-full">
							<div className="w-2 ml-5.5 group absolute pointer-events-auto text-muted left-1/6 -translate-x-1/2 flex flex-col items-center justify-center ">
								<div className="w-2 h-2 rounded bg-accent/40 group-hover:bg-accent duration-200" />
								<label className="min-w-fit mt-4 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 duration-200">Navigate to Library</label>
							</div>
							<div className="w-2 ml-3.5 group absolute pointer-events-auto text-muted left-2/6 -translate-x-1/2 flex flex-col items-center justify-center ">
								<div className="w-2 h-2 rounded bg-accent/40 group-hover:bg-accent duration-200" />
								<label className="min-w-fit mt-4 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 duration-200">Filter: Playlist</label>
							</div>
							<div className="w-2 ml-1.5 group absolute pointer-events-auto text-muted left-3/6 -translate-x-1/2 flex flex-col items-center justify-center ">
								<div className="w-2 h-2 rounded bg-accent/40 group-hover:bg-accent duration-200" />
								<label className="min-w-fit mt-4 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 duration-200">New Playlist</label>
							</div>
							<div className="w-2 -ml-0.5 group absolute pointer-events-auto text-muted left-4/6 -translate-x-1/2 flex flex-col items-center justify-center ">
								<div className="w-2 h-2 rounded bg-accent/40 group-hover:bg-accent duration-200" />
								<label className="min-w-fit mt-4 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 duration-200">Configure</label>
							</div>
							<div className="w-2 -ml-2.5 group absolute pointer-events-auto text-muted left-5/6 -translate-x-1/2 flex flex-col items-center justify-center ">
								<div className="w-2 h-2 rounded bg-accent/40 group-hover:bg-accent duration-200" />
								<label className="min-w-fit mt-4 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 duration-200">Create</label>
							</div>
						</div>
						<div style={styles.stepsRow} className="pointer-events-none">
							<div
								style={{
									...styles.progressFill,
									minWidth: `calc(${Math.min(globalSteps,6)} / 6 * 100%)`,
								}}
							/>
							<div style={styles.progressTick} />
							<div style={styles.progressRemaining} />{" "}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
//Configure Playlist
//--Navigate to library
//--Navigate to playlists
//--Create new playlist
//--Set playlist name
//Add songs to playlist
//--repeat for each song:
//----Search for song
//----Open songs tab
//----Match song
//----if match:
//------Open context menu
//------Click "Add to playlist"
//------Select playlist
//----else:
//------Add song to "not found" list
