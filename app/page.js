import styles from "./page.module.css";

const items = [
  {
    id: 1,
    name: "Fresh Apples",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
  },
  {
    id: 2,
    name: "Organic Tomatoes",
    image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-02-24/Tomato.jpg"
  },
  {
    id: 3,
    name: "Milk Carton",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1437/posts/107486/image-upload/placing_design_over_milk_carton_2.jpg"
  },
  {
    id: 4,
    name: "Whole Wheat Bread",
    image: "https://www.realsimple.com/thmb/Y8mQQH7tLvmJf42fEiBsUYgvGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WholeGrainBread-354a23b37a1b42c0bd8a4d2ee34fcdb9.jpg"
  },
  {
    id: 5,
    name: "Fresh Apples",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
  },
  {
    id: 6,
    name: "Organic Tomatoes",
    image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-02-24/Tomato.jpg"
  },
  {
    id: 7,
    name: "Milk Carton",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1437/posts/107486/image-upload/placing_design_over_milk_carton_2.jpg"
  },
  {
    id: 8,
    name: "Whole Wheat Bread",
    image: "https://www.realsimple.com/thmb/Y8mQQH7tLvmJf42fEiBsUYgvGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WholeGrainBread-354a23b37a1b42c0bd8a4d2ee34fcdb9.jpg"
  },
  {
    id: 9,
    name: "Fresh Apples",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
  },
   {
    id: 10,
    name: "Fresh Apples",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
  },
  {
    id: 11,
    name: "Organic Tomatoes",
    image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-02-24/Tomato.jpg"
  },
  {
    id: 12,
    name: "Milk Carton",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1437/posts/107486/image-upload/placing_design_over_milk_carton_2.jpg"
  },
  {
    id: 13,
    name: "Whole Wheat Bread",
    image: "https://www.realsimple.com/thmb/Y8mQQH7tLvmJf42fEiBsUYgvGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WholeGrainBread-354a23b37a1b42c0bd8a4d2ee34fcdb9.jpg"
  },
  {
    id: 14,
    name: "Fresh Apples",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
  },
  {
    id: 15,
    name: "Organic Tomatoes",
    image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-02-24/Tomato.jpg"
  },
  {
    id: 16,
    name: "Milk Carton",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1437/posts/107486/image-upload/placing_design_over_milk_carton_2.jpg"
  },{
    id: 17,
    name: "Fresh Apples",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
  },
  {
    id: 28,
    name: "Organic Tomatoes",
    image: "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-02-24/Tomato.jpg"
  },
  {
    id: 19,
    name: "Milk Carton",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1437/posts/107486/image-upload/placing_design_over_milk_carton_2.jpg"
  },{
    id: 20,
    name: "Fresh Apples",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
  },{
    id: 21,
    name: "Milk Carton",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1437/posts/107486/image-upload/placing_design_over_milk_carton_2.jpg"
  }
];

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to the shopping market</h1>

      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}