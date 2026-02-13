"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    id: 1,
    title: "Nhân duyên gặp gỡ",
    description:
      "Nhớ lần đó anh vô tình lướt qua em rồi bẵng đi một thời gian. Ai ngờ đâu, giây phút hai thế giới chạm nhau ấy đã khiến hai tảng băng dính chặt đến tận bây giờ. Hãy trân trọng anh nghe chưa!",
    image:
      "https://play-lh.googleusercontent.com/a2HLOHpXniFGGEOxr6fcAkhmjQTT_r9IK2p23c9RDdvJAioZrSsyIwBdaxqRF7qScW0",
    position: "left",
  },
  {
    id: 2,
    title: "Gương vỡ lại lành",
    description: "Nhớ lại ba lần mình chia tay, rồi lần em làm anh khóc như mưa... Không biết chúng ta đã cùng nhau vượt qua bao nhiêu sóng gió rồi nhỉ? Nhưng sau tất cả, mình vẫn bên nhau. Anh yêu em nhiều lắm. Dù tương lai có chông gai thế nào, nếu anh đuối quá thì em bảo vệ anh nhé!",
    image:
      "/namtay1.jpg",
    position: "right",
  },
  {
    id: 3,
    title: "Lần đầu tiên gặp mặt",
    description: "Nhớ lần đầu gặp em, tim anh đập loạn nhịp, đầu óc trống rỗng chỉ biết nắm chặt tay em. Lúc về còn ngượng ngùng mãi mới dám ôm em một cái. Nhưng đến lần thứ hai thì... hí hí... hôn cái moah moah!",
    image:
      "/ôm.png",
    position: "left",
  },
  {
    id: 4,
    title: "Hành Trình Kỷ Niệm",
    description: "Tình yêu của chúng ta đâu chỉ có thế, kỷ niệm đẹp chỉ mới bắt đầu thôi. Hãy cùng anh cố gắng viết tiếp câu chuyện này nhé. Yêu em, Heon của anh!",
    image:
      "/namtay2.jpg",
    position: "right",
  },
];

export const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: (index: number) => (index % 2 === 0 ? -50 : 50) },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="timeline"
      className="py-40 md:py-80 px-4 md:px-8 bg-gradient-to-b from-white via-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif text-center mb-4 sakura-text text-balance"
        >
          Sợi Tơ Của Định Mệnh
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 text-lg mb-16"
        >
          Câu chuyện tình yêu của chúng mình được viết nên từ những khoảnh khắc
          giản đơn mà diệu kỳ.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FFB7C5] via-[#9C89B8] to-[#F7A072]"
          />

          {/* Timeline events */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-24 md:space-y-48"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: event.position === "left" ? -50 : 50,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className={`flex flex-col md:flex-row ${event.position === "left" ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-0`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-effect p-6 rounded-lg hover:shadow-lg hover:shadow-[#FFB7C5]/20 transition-all"
                  >
                    <h3 className="text-2xl font-serif text-[#1A1F3A] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="w-full h-32 rounded-lg overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FFB7C5] to-[#F7A072] border-4 border-white shadow-lg shadow-[#FFB7C5]/50"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
