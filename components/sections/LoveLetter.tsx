"use client";

import React from "react";
import { motion } from "framer-motion";

export const LoveLetter = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Sunset glow background */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#F7A072]/20 to-[#FFB7C5]/20 blur-3xl"
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif text-center mb-12 sakura-text text-balance"
        >
          Lời Thú Nhận Dưới Hoàng Hôn
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-100/50 via-pink-100/30 to-purple-100/20 blur-lg" />

          <div className="relative glass-effect p-6 md:p-12 rounded-lg shadow-2xl shadow-orange-200/30">
            {/* Letter texture */}
            <div
              className="absolute inset-0 rounded-lg opacity-5"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><defs><pattern id='pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'><path d='M0 0L100 0L50 100' fill='%23333' opacity='0.1'/></pattern></defs><rect width='100' height='100' fill='%23fff' opacity='0.5'/></svg>\")",
              }}
            />

            <div className="relative space-y-6 font-serif text-[#1A1F3A]">
              <motion.p
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-center text-sm text-[#9C89B8] tracking-widest mb-6"
              >
                ✦ Bức Thư Gửi Em ✦
              </motion.p>

<p className="text-lg leading-relaxed">
  Người anh thương nhất trên đời, Heon yêu dấu,
</p>

<p className="text-lg leading-relaxed">
  Có những khoảnh khắc trong cuộc đời chỉ diễn ra một lần nhưng đủ để thay đổi tất cả. Khoảnh khắc anh nhắn em: “Bạn có nhớ mình là ai không?” chính là một trong những điều kỳ diệu ấy. Sau bao năm yêu thương và chờ đợi, anh nhận ra người con gái anh muốn che chở, muốn nắm tay đi hết cuộc đời… chính là em. Trong giây phút ấy, giữa những giọt nước mắt lặng thầm, anh hiểu thế nào là yêu một người bằng cả trái tim.
</p>

<p className="text-lg leading-relaxed">
  Mỗi cuộc gọi ta trao nhau, mỗi dòng tin nhắn giản dị, mỗi phút giây bình yên giữa bộn bề cuộc sống — tất cả đều trở thành những trang đẹp nhất trong câu chuyện của riêng chúng ta. Em là hành trình đẹp nhất anh từng đi qua, là giấc mơ dịu dàng nhất anh từng có, và là tình yêu anh muốn giữ gìn suốt đời.
</p>

<p className="text-lg leading-relaxed">
  Và trên chặng đường phía trước, dù có thử thách hay áp lực, hãy luôn nhớ rằng anh ở đây — không rời xa, không buông tay. Em không chỉ là tình yêu của anh… em là cả thế giới của anh.
</p>

<p className="text-lg leading-relaxed">
  10 điểm cho "cún yêu" của em — viết văn đỉnh cao, nhưng yêu em còn đỉnh hơn nữa nhé hé hé.
</p>

              <p className="text-center text-[#FFB7C5] font-bold text-xl pt-4">
                ♡
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
