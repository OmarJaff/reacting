export type Puppy = {
  id: number;
  name: string;
  vibe: string;
  imagePath: string;
};

export const puppies: Puppy[] = [
  {
    id: 1,
    name: "Frisket",
    imagePath: "/images/1.jpg",
    vibe: "Mother of all pups",
  },
  { id: 2, name: "Chase", imagePath: "/images/2.jpg", vibe: "Very good boi" },
  { id: 3, name: "Leia", imagePath: "/images/3.jpg", vibe: "Enjoys naps" },
  { id: 4, name: "Pupi", imagePath: "/images/4.jpg", vibe: "Loves cheese" },
  {
    id: 5,
    name: "Russ",
    imagePath: "/images/5.jpg",
    vibe: "Ready to save the world",
  },
  {
    id: 6,
    name: "Yoko",
    imagePath: "/images/6.jpg",
    vibe: "Ready for anything",
  },
];
