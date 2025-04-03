import React, { useState } from 'react'
import {
  AboutMeWrapper,
  AboutMeContainer,
  AboutMeText,
  AboutMeImage,
} from './aboutme.style'
import Avatar from '../../assets/img/avatar1.jpg'
import { FaArrowRight } from 'react-icons/fa'

function AboutMe() {
  const [showMore, setShowMore] = useState(false)

  const handleContactClick = () => {
    setShowMore(!showMore)
  }

  return (
    <AboutMeWrapper id="about-me">
      <AboutMeContainer>
        <AboutMeText>
          <h2>
            <span style={{ color: '#c778dd', marginRight: '8px' }}>#</span>
            About-me
          </h2>
          <br />
          <p>
            Mình là Giang – một Fullstack Developer với kinh nghiệm đã từng tham
            gia một số dự án từ nhỏ tới vừa, từ lập kế hoạch, phát triển đến
            triển khai, nên mình hiểu khá rõ cách một sản phẩm hoạt động từ
            backend đến frontend.
            <br />
            <br />
            Nhưng điều quan trọng nhất mình học được không phải là “làm được mọi
            thứ”, mà là biết "làm gì cho đúng", và "phối hợp với team để mọi thứ
            chạy mượt mà".
            <br />
            <br />
            Mình từng làm việc trực tiếp với designer, QA, khách hàng và cũng
            từng tự xử lý các lỗi production. Vậy nên mình hiểu rằng viết code
            chỉ là một phần — phần còn lại là giao tiếp, trách nhiệm và tinh
            thần làm việc cùng nhau.
            <br />
            <br />
            Mình luôn ưu tiên viết code rõ ràng, dễ hiểu và dễ bảo trì — vì mình
            tin rằng một sản phẩm tốt bắt đầu từ sự chỉn chu trong từng dòng
            code.
          </p>

          {/* Phần "Đọc thêm" */}
          {showMore && (
            <>
              <br />
              <p>
                Ngoài công việc, mình rất đam mê học hỏi công nghệ mới và khám
                phá những phương pháp phát triển ứng dụng hiệu quả hơn. Mình
                luôn tìm cách tối ưu hóa hiệu suất và giúp người dùng có những
                trải nghiệm tốt nhất.
              </p>
              <p>
                Trong tương lai, mình muốn phát triển thêm các kỹ năng liên quan
                đến lãnh đạo và quản lý dự án để có thể đóng góp vào các sản
                phẩm có tầm ảnh hưởng lớn hơn.
              </p>
            </>
          )}

          {/* Nút "Đọc thêm" */}
          <button className="readmore-btn" onClick={handleContactClick}>
            {showMore ? 'Thu gọn' : 'Đọc thêm'}{' '}
            <FaArrowRight style={{ marginLeft: '10px' }} />
          </button>
        </AboutMeText>

        <AboutMeImage>
          <div className="avatar-wrapper">
            <img src={Avatar} alt="Triệu Hoàng Giang" />
            <div className="ready-for-job">
              <span className="dot" />
              Ready for job
            </div>
          </div>
        </AboutMeImage>
      </AboutMeContainer>
    </AboutMeWrapper>
  )
}

export default AboutMe
