import React, { useState } from 'react'
import {
  PortfolioSection,
  PortfolioTitle,
  ProjectList,
  ProjectCard,
  ProjectName,
  ProjectDescription,
  ProjectTech,
  ProjectLinks,
  ProjectLink,
} from './portfolio.styled'
import Modal from './modal.component'
import DetailModal from './detail-modal.component'
import { FaExternalLinkAlt } from 'react-icons/fa'
import DemoLogin from '../../assets/demo/epbqlsp/demo1.png'
import DemoOtp from '../../assets/demo/epbqlsp/DemoOTP.png'
import DemoHaravan from '../../assets/demo/epbqlsp/DemoHRV1.png'
import DemoStatus from '../../assets/demo/epbqlsp/demostatus.png'

function Portfolio() {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [detailModal, setDetailModal] = useState({
    open: false,
    title: '',
    content: null,
  })

  const openModal = (message) => {
    setModalMessage(message)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalMessage('')
  }

  const openDetailModal = (title, content) => {
    setDetailModal({ open: true, title, content })
  }

  const closeDetailModal = () => {
    setDetailModal({ open: false, title: '', content: null })
  }

  return (
    <PortfolioSection id="portfolio">
      <PortfolioTitle>Một Số Dự Án Đã Tham Gia:</PortfolioTitle>
      <ProjectList>
        {/* Dự án 1 */}
        <ProjectCard>
          <ProjectName>EPEBEN - Quản Lí Đơn Hàng</ProjectName>
          <ProjectDescription>
            Hệ thống quản lý đơn hàng, giúp theo dõi trạng thái từ sản xuất đến
            giao vận. Hỗ trợ phân biệt rõ ràng các loại sản phẩm.
          </ProjectDescription>
          <ProjectTech>React.js · Node.js · MongoDB</ProjectTech>
          <ProjectLinks>
            <ProjectLink
              as="button"
              onClick={() => openModal('Dự án này hiện chưa public.')}
            >
              GitHub
            </ProjectLink>
            <ProjectLink
              as="button"
              onClick={() =>
                openModal('Dự án sử dụng nội bộ, không có link public.')
              }
            >
              Live
            </ProjectLink>
            <ProjectLink
              as="button"
              onClick={() =>
                openDetailModal(
                  'EPEBEN - Quản lí đơn hàng',
                  <>
                    <p>
                      <strong>EPEBEN</strong> là hệ thống nội bộ giúp quản lý
                      toàn trình đơn hàng từ sản xuất đến giao vận cho tranh
                      Mica & Fomex. Dưới đây là danh sách các chức năng tiêu
                      biểu:
                    </p>

                    {/*  Chức năng 1 */}
                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        1. Đăng nhập bằng Google Authenticator
                      </h4>
                      <img
                        src={DemoLogin}
                        alt="Đăng nhập bằng Google"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />
                      <img
                        src={DemoOtp}
                        alt="Nhập mã xác thực OTP"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />
                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>• Cho phép đăng nhập bằng Google OAuth 2.0</li>
                        <li>
                          • Nếu người dùng mới → tạo tài khoản, phân quyền mặc
                          định
                        </li>
                        <li>
                          • Nếu đã có tài khoản → đăng nhập và cấp token JWT
                        </li>
                        <li>
                          • Xác thực 2 bước bằng Google Authenticator (OTP 6 số)
                        </li>
                        <li>
                          • Bảo mật, tiện lợi, hạn chế truy cập ngoài công ty
                        </li>
                      </ul>
                      <p>
                        <strong>Stack:</strong> Google Identity · React ·
                        Node.js · JWT · Speakeasy
                      </p>
                    </div>

                    {/* Chức năng 2 */}
                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        2. Đồng bộ đơn hàng từ Haravan API
                      </h4>
                      <img
                        src={DemoHaravan}
                        alt="Kết nối Haravan API"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />
                      <p>
                        EPEBEN kết nối Haravan để lấy dữ liệu đơn hàng bán
                        online, xử lý và đưa vào hệ thống sản xuất nội bộ.
                      </p>
                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>• Gọi API Haravan để lấy danh sách đơn hàng mới</li>
                        <li>
                          • Mapping dữ liệu sang chuẩn nội bộ (Mica/Fomex)
                        </li>
                        <li>
                          • Cập nhật trạng thái đơn hàng, lưu lịch sử đồng bộ
                        </li>
                        <li>• Cho phép tra cứu đơn gốc từ mã Haravan</li>
                      </ul>
                      <p>
                        <strong>Stack:</strong> Node.js · Axios · MongoDB ·
                        Haravan API
                      </p>
                    </div>

                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        3. Cập nhật trạng thái xử lý đơn hàng
                      </h4>

                      <img
                        src={DemoStatus}
                        alt="Cập nhật trạng thái"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />

                      <p>
                        Trạng thái xử lý đơn hàng trong hệ thống được cập nhật
                        tự động dựa trên thao tác của nhân viên, giúp bộ phận
                        sản xuất theo dõi tiến độ nhanh chóng mà không cần thêm
                        nút chuyển trạng thái thủ công.
                      </p>

                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>
                          • Mặc định, tất cả đơn hàng mới đều có trạng thái{' '}
                          <strong>Chưa xử lý</strong>
                        </li>
                        <li>
                          • Khi nhân viên chọn đầy đủ{' '}
                          <strong>Máy sản xuất</strong> (và{' '}
                          <strong>Kệ Fomex</strong> nếu là sản phẩm Fomex),
                          trạng thái đơn sẽ tự động chuyển sang{' '}
                          <strong>Đã xử lý</strong>
                        </li>
                        <li>
                          • Hệ thống có bộ lọc theo trạng thái để dễ dàng theo
                          dõi đơn chưa hoàn tất
                        </li>
                        <li>
                          • Giao diện tối giản, không cần thêm nút toggle hoặc
                          checkbox
                        </li>
                        <li>
                          • Mỗi lần trạng thái được cập nhật sẽ lưu lại{' '}
                          <strong>thời gian</strong> và{' '}
                          <strong>người thao tác</strong>
                        </li>
                      </ul>

                      <p>
                        <strong>Stack:</strong> React.js · Node.js · MongoDB
                      </p>
                    </div>
                  </>
                )
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontStyle: 'italic',
              }}
            >
              Xem chi tiết <FaExternalLinkAlt />
            </ProjectLink>
          </ProjectLinks>
        </ProjectCard>
      </ProjectList>

      {/* Modal đơn giản */}
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}

      {/* Modal xem chi tiết */}
      {detailModal.open && (
        <DetailModal title={detailModal.title} onClose={closeDetailModal}>
          {detailModal.content}
        </DetailModal>
      )}
    </PortfolioSection>
  )
}

export default Portfolio
