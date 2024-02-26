interface Contact {
  name: string;
  imgURL: string;
  phone: string;
  email: string;
  text:string;
}

const contacts: Contact[] = [
  {
    name: "Beyonce ",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com",
    text:"เรียกจากอ็อปเจ็ค"
  },
  {
    name: "Jack Bauer ",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com",
    text:"เรียกจากอ็อปเจ็ค"
  },
  {
    name: "Chuck Norris ",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
    text:"เรียกจากอ็อปเจ็ค"
  }
];

export default contacts;


