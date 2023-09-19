import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Testimonials = () => {
  return (
    <div className="container mt-5">
      <div className="comp-heading">
        <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
          What They Say
        </h6>
        <h1>
          Our Customers Say <br /> About Us
        </h1>
      </div>

      <div className="testimonial-carousel mt-3 mb-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={50}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="testi-card p-4">
              <h5>"Memorable Trip"</h5>
              <p className="sub">
                Great trip! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, molestias blanditiis optio tempore quas vel
                cupiditate pariatur modi ratione voluptas ea, tenetur ab animi
                et praesentium, doloribus voluptates facilis dignissimos?
              </p>
              <div className="customer-info">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://hairstylecamp.com/wp-content/uploads/space-bun-hairstyle-for-black-women-with-square-face.jpg"
                      className="img-fluid rounded-pill"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Jennifer Doe</h6>
                    <p className="sub">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-card p-4">
              <h5>"Memorable Trip"</h5>
              <p className="sub">
                Great trip! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, molestias blanditiis optio tempore quas vel
                cupiditate pariatur modi ratione voluptas ea, tenetur ab animi
                et praesentium, doloribus voluptates facilis dignissimos?
              </p>
              <div className="customer-info">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://hairstylecamp.com/wp-content/uploads/space-bun-hairstyle-for-black-women-with-square-face.jpg"
                      className="img-fluid rounded-pill"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Jennifer Doe</h6>
                    <p className="sub">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-card p-4">
              <h5>"Memorable Trip"</h5>
              <p className="sub">
                Great trip! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, molestias blanditiis optio tempore quas vel
                cupiditate pariatur modi ratione voluptas ea, tenetur ab animi
                et praesentium, doloribus voluptates facilis dignissimos?
              </p>
              <div className="customer-info">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://hairstylecamp.com/wp-content/uploads/space-bun-hairstyle-for-black-women-with-square-face.jpg"
                      className="img-fluid rounded-pill"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Jennifer Doe</h6>
                    <p className="sub">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-card p-4">
              <h5>"Memorable Trip"</h5>
              <p className="sub">
                Great trip! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, molestias blanditiis optio tempore quas vel
                cupiditate pariatur modi ratione voluptas ea, tenetur ab animi
                et praesentium, doloribus voluptates facilis dignissimos?
              </p>
              <div className="customer-info">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://hairstylecamp.com/wp-content/uploads/space-bun-hairstyle-for-black-women-with-square-face.jpg"
                      className="img-fluid rounded-pill"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Jennifer Doe</h6>
                    <p className="sub">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-card p-4">
              <h5>"Memorable Trip"</h5>
              <p className="sub">
                Great trip! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, molestias blanditiis optio tempore quas vel
                cupiditate pariatur modi ratione voluptas ea, tenetur ab animi
                et praesentium, doloribus voluptates facilis dignissimos?
              </p>
              <div className="customer-info">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://hairstylecamp.com/wp-content/uploads/space-bun-hairstyle-for-black-women-with-square-face.jpg"
                      className="img-fluid rounded-pill"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Jennifer Doe</h6>
                    <p className="sub">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-card p-4">
              <h5>"Memorable Trip"</h5>
              <p className="sub">
                Great trip! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, molestias blanditiis optio tempore quas vel
                cupiditate pariatur modi ratione voluptas ea, tenetur ab animi
                et praesentium, doloribus voluptates facilis dignissimos?
              </p>
              <div className="customer-info">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://hairstylecamp.com/wp-content/uploads/space-bun-hairstyle-for-black-women-with-square-face.jpg"
                      className="img-fluid rounded-pill"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Jennifer Doe</h6>
                    <p className="sub">Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="get-started">
        <div className="row">
          <div className="col-6">
            <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
              Stay Connected
            </h6>
            <h1>Get Started with Adventour!</h1>
          </div>
          <div className="col-6">
            <button className="btn mt-4 float-end">
              Get Started <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
