import { useEffect, useState } from "react"
import BookCard from "../books/BookCard";

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TopSellers = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
    const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

    // 지금은 books.json가져오기
    useEffect(() => {
        fetch("books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    })

    const filteredBooks =selectedCategory === "Choose a genre" ? books :
        books.filter((book) => book.category === selectedCategory.toLowerCase());

  return (
    <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
        <div className="mb-8 flex items-center">
            <select onChange={(e) => setSelectedCategory(e.target.value)}
                name="category" id="category" className="border bg-[#EAEAEA] px-4 py-2 focus:outline-none rounded-md border-gray-300 ">
                {
                    categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>

         <Swiper
            slidesPerView={1} // 기본 보여줄 슬라이드 개수 = 1개
            spaceBetween={30} // 슬라이드 사이 간격 = 30px
            navigation={true} // 좌우 버튼 활성화(화살표 버튼)
            breakpoints={{ // 반응형 설정
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
            {
                filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                    <SwiperSlide key={index}>
                        <BookCard  book={book} />
                    </SwiperSlide>
                ))
            }
            </Swiper>
    </div>
  )
}

export default TopSellers