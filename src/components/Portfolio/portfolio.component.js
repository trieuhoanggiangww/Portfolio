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
import DemoLogin from '../../assets/demo/epbqldh/demo1.png'
import DemoOtp from '../../assets/demo/epbqldh/DemoOTP.png'
import DemoHaravan from '../../assets/demo/epbqldh/DemoHRV1.png'
import DemoStatus from '../../assets/demo/epbqldh/demostatus.png'
import DemoStatus2 from '../../assets/demo/epbqldh/demostatus2.png'
import DemoOrderTools from '../../assets/demo/epbqldh/demoqldh.png'
import LoginDemo from '../../assets/demo/qlsp/logindemo.png'
import LoginDemo2 from '../../assets/demo/qlsp/logindemo2.png'
import DemoExport from '../../assets/demo/qlsp/DemoExport.png'
import DemoUploadExcel from '../../assets/demo/qlsp/uploaddemo.png'
import DemoProductList from '../../assets/demo/qlsp/dmsp.png'
import DemoProductDetail from '../../assets/demo/qlsp/sp1.png'
import DemoProductVariants from '../../assets/demo/qlsp/2.png'

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
          <ProjectName>EPEBEN - Quản Lí Đơn Hàng </ProjectName>
          <span style={{ fontStyle: 'italic' }}>
            <strong>Thời gian:</strong> 12/2023 – 06/2024
          </span>
          <ProjectDescription>
            Hệ thống quản lý đơn hàng, giúp theo dõi trạng thái từ sản xuất đến
            giao vận. Hỗ trợ phân biệt rõ ràng các loại sản phẩm.
          </ProjectDescription>
          <ProjectTech>
            <p>
              <strong>Frontend:</strong> React.js · Styled-components
              <br />
              <strong>Backend:</strong> Node.js · Express.js · MongoDB
              <br />
              <strong>Xác thực:</strong> Google OAuth · JWT · Speakeasy (OTP)
              <br />
              <strong>Tích hợp:</strong> Haravan API · Shopee API · Axios
            </p>
          </ProjectTech>
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
                      <strong>EPEBEN - Quản Lí Đơn Hàng</strong> là hệ thống nội
                      bộ giúp quản lý toàn trình đơn hàng từ sản xuất đến giao
                      vận cho tranh Mica & Fomex. Dưới đây là danh sách các chức
                      năng tiêu biểu:
                    </p>
                    <div style={{ textAlign: 'left' }}>
                      <small style={{ opacity: 0.8, fontStyle: 'italic' }}>
                        Số lượng người tham gia: 3 người
                        <br />
                        Vai trò: Phát triển các chức năng xử lý đơn hàng, đồng
                        bộ Haravan và in hóa đơn.
                      </small>
                    </div>

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
                        <li> Cho phép đăng nhập bằng Google OAuth 2.0</li>
                        <li>
                          Nếu người dùng mới → tạo tài khoản, phân quyền mặc
                          định
                        </li>
                        <li>
                          Nếu đã có tài khoản → đăng nhập và cấp token JWT
                        </li>
                        <li>
                          Xác thực 2 bước bằng Google Authenticator (OTP 6 số)
                        </li>
                        <li>
                          Bảo mật, tiện lợi, hạn chế truy cập ngoài công ty
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
                        <li> Gọi API Haravan để lấy danh sách đơn hàng mới</li>
                        <li>Mapping dữ liệu sang chuẩn nội bộ (Mica/Fomex)</li>
                        <li>
                          Cập nhật trạng thái đơn hàng, lưu lịch sử đồng bộ
                        </li>
                        <li> Cho phép tra cứu đơn gốc từ mã Haravan</li>
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
                      <img
                        src={DemoStatus2}
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
                          Mặc định, tất cả đơn hàng mới đều có trạng thái{' '}
                          <strong>Chưa xử lý</strong>
                        </li>
                        <li>
                          Khi nhân viên chọn đầy đủ{' '}
                          <strong>Máy sản xuất</strong> (và{' '}
                          <strong>Kệ Fomex</strong> nếu là sản phẩm Fomex),
                          trạng thái đơn sẽ tự động chuyển sang{' '}
                          <strong>Đã xử lý</strong>
                        </li>
                        <li>
                          Hệ thống có bộ lọc theo trạng thái để dễ dàng theo dõi
                          đơn chưa hoàn tất
                        </li>
                        <li>
                          Giao diện tối giản, không cần thêm nút toggle hoặc
                          checkbox
                        </li>
                        <li>
                          Mỗi lần trạng thái được cập nhật sẽ lưu lại{' '}
                          <strong>thời gian thao tác</strong>
                        </li>
                      </ul>

                      <p>
                        <strong>Stack:</strong> React.js · Node.js · MongoDB
                      </p>
                    </div>
                    {/* Chức năng 4 */}
                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        4. Tìm kiếm – Theo dõi trạng thái – In hóa đơn hàng loạt
                      </h4>

                      <img
                        src={DemoOrderTools}
                        alt="Quản lý đơn hàng nâng cao"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />

                      <p>
                        Đây là cụm tính năng giúp người dùng xử lý đơn hàng
                        nhanh và hiệu quả nhất: từ việc tìm đúng đơn, kiểm tra
                        trạng thái đến in hóa đơn hàng loạt.
                      </p>

                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>
                          <strong>Tìm kiếm nhanh:</strong> theo mã đơn hàng hoặc
                          kênh bán hàng (Shopee, Lazada...)
                        </li>
                        <li>
                          <strong>Theo dõi trạng thái:</strong> mỗi đơn hiển
                          thị:
                          <ul>
                            <li> Trạng thái xử lý: Đã xử lý / Chưa xử lý</li>
                            <li>
                              Chuẩn bị hàng: Chờ lấy hàng / Đang giao hàng / Đã
                              Giao Hàng / Chưa chuẩn bị hàng
                            </li>
                            <li> Thời gian in gần nhất (nếu đã in hóa đơn)</li>
                          </ul>
                        </li>
                        <li>
                          <strong>In hóa đơn hàng loạt:</strong>
                          <ul>
                            <li> Chọn nhiều đơn bằng checkbox</li>
                            <li>Nút “In các hóa đơn được chọn” tạo file PDF</li>
                            <li>
                              Hóa đơn chuẩn SPX Express, có thể in A5 hoặc A4
                            </li>
                            <li> Ghi nhận thời gian & số lần in</li>
                          </ul>
                        </li>
                      </ul>

                      <p>
                        <strong>Stack:</strong> React.js · Node.js · MongoDB ·
                        html2pdf / jsPDF
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

        {/* Dự án 2 */}
        <ProjectCard>
          <ProjectName>EPEBEN - Quản Lí Sản Phẩm</ProjectName>
          <span style={{ fontStyle: 'italic' }}>
            <strong>Thời gian:</strong> 06/2023 – 09/2024
          </span>
          <ProjectDescription>
            Hệ thống thu thập và quản lý dữ liệu sản phẩm từ các sàn TMĐT Trung
            Quốc (Taobao, Tmall, 1688), hỗ trợ xuất/nhập Excel, chỉnh sửa sản
            phẩm và lưu trữ ảnh trên Google Cloud / Google Drive
          </ProjectDescription>
          <ProjectTech>
            <p>
              <strong>Frontend:</strong> React.js, Styled-Components
              <br />
              <strong>Backend:</strong> Node.js, Express.js, MongoDB
              <br />
              <strong>Xử lý dữ liệu:</strong> Axios, XLSX (xuất/import Excel),
              Cheerio (crawling HTML)
              <br />
              <strong>Lưu trữ ảnh:</strong> Google Cloud Storage, Google Drive
              API
              <br />
              <strong>Tính năng phụ trợ:</strong> JWT (xác thực), Google OAuth,
              Speakeasy (OTP)
            </p>
          </ProjectTech>
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
                  'EPEBEN - Quản Lí Sản Phẩm',
                  <>
                    <p>
                      <strong>EPEBEN - Quản Lí Sản Phẩm</strong> là hệ thống nội
                      bộ giúp quản lý toàn trình sản phẩm nhập từ các sàn TMĐT
                      Trung Quốc (Taobao, Tmall, 1688), từ bước crawl dữ liệu,
                      xử lý nội dung, hình ảnh đến đăng bán. Dưới đây là danh
                      sách các chức năng tiêu biểu:
                    </p>
                    <div style={{ textAlign: 'left' }}>
                      <small style={{ opacity: 0.8, fontStyle: 'italic' }}>
                        Số lượng người tham gia: 1 người
                        <br />
                        Vai trò: Phát triển chức năng quản lý sản phẩm, bao gồm:
                        crawl dữ liệu từ TMĐT Trung Quốc, xử lý nội dung – ảnh
                        sản phẩm, và upload ảnh lên Google Cloud Storage /
                        Drive.
                      </small>
                    </div>

                    {/*  Chức năng 1 */}
                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        1. Đăng nhập bằng Google Authenticator
                      </h4>
                      <img
                        src={LoginDemo}
                        alt="Đăng nhập bằng Google"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />
                      <img
                        src={LoginDemo2}
                        alt="Nhập mã xác thực OTP"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />
                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li> Cho phép đăng nhập bằng Google OAuth 2.0</li>
                        <li>
                          Nếu người dùng mới → tạo tài khoản, phân quyền mặc
                          định
                        </li>
                        <li>
                          Nếu đã có tài khoản → đăng nhập và cấp token JWT
                        </li>
                        <li>
                          Xác thực 2 bước bằng Google Authenticator (OTP 6 số)
                        </li>
                        <li>
                          Bảo mật, tiện lợi, hạn chế truy cập ngoài công ty
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
                        2. Xuất dữ liệu sản phẩm từ TMĐT Trung Quốc ra file
                        Excel
                      </h4>
                      <img
                        src={DemoExport}
                        alt="Xuất dữ liệu sản phẩm"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />
                      <p>
                        Sử dụng một Extension để thu thập (crawl) dữ liệu sản
                        phẩm từ các nền tảng TMĐT như Taobao, Tmall, 1688 và
                        xuất ra file Excel để dễ dàng quản lý hoặc chia sẻ.
                      </p>
                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>
                          Extension dựa vào id từ link sản phẩm và lấy thông tin
                          sản phẩm từ reponse của api h5api.m.taobao.com rồi
                          tổng hợp lại trên file excel
                        </li>
                        <li>
                          Crawl dữ liệu sản phẩm và biến thể từ Taobao, Tmall,
                          1688
                        </li>
                        <li>
                          Chuyển đổi và định dạng dữ liệu phù hợp với chuẩn nội
                          bộ
                        </li>
                        <li>
                          Xuất file Excel chứa thông tin sản phẩm + ảnh minh họa
                        </li>
                        <li>
                          Hỗ trợ upload lại Excel để cập nhật ngược vào hệ thống
                        </li>
                      </ul>
                      <p>
                        <strong>Stack:</strong> Node.js · Puppeteer/Cheerio ·
                        ExcelJS · MongoDB
                      </p>
                    </div>

                    {/* Chức năng 3 */}
                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        3. Tải lên và cập nhật dữ liệu sản phẩm từ file Excel
                      </h4>

                      <img
                        src={DemoUploadExcel}
                        alt="Tải lên Excel"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />

                      <p>
                        Hệ thống hỗ trợ upload file Excel để cập nhật thông tin
                        sản phẩm đã được crawl hoặc chỉnh sửa. Tự động phân tích
                        dữ liệu để tránh trùng lặp và giúp người dùng quản lý
                        kho sản phẩm một cách chính xác.
                      </p>

                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>
                          Upload file Excel (.xlsx/.xls) chứa dữ liệu sản phẩm
                          và biến thể
                        </li>
                        <li>
                          Phân tích và hiển thị thống kê: số sản phẩm, biến thể,
                          trùng lặp
                        </li>
                        <li>
                          Lưu vào cơ sở dữ liệu để sử dụng trong các bước quản
                          lý tiếp theo
                        </li>
                        <li>
                          Có lịch sử tải lên để dễ dàng truy vết và quản lý lại
                          file
                        </li>
                        <li>
                          Cho phép xoá lịch sử tải lên từng file hoặc toàn bộ
                        </li>
                      </ul>

                      <p>
                        <strong>Stack:</strong> React · Node.js · Multer ·
                        ExcelJS · MongoDB
                      </p>
                    </div>

                    {/* Chức năng 4 */}
                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        4. Giao diện quản lý sản phẩm trực quan
                      </h4>

                      <img
                        src={DemoProductList}
                        alt="Danh sách sản phẩm"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />

                      <p>
                        Trang quản lý sản phẩm cho phép người dùng dễ dàng tra
                        cứu, chỉnh sửa và kiểm soát trạng thái xử lý nội dung,
                        hình ảnh và đăng bán.
                      </p>

                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>• Tìm kiếm sản phẩm theo tên hoặc SKU</li>
                        <li>
                          • Lọc theo trạng thái xử lý nội dung chữ, nội dung
                          ảnh, trạng thái đăng
                        </li>
                        <li>
                          • Hiển thị thông tin: tên sản phẩm, ảnh bìa, số lượng,
                          trạng thái xử lý
                        </li>
                        <li>
                          • Nút <strong>Sửa</strong> để cập nhật nội dung và
                          hình ảnh sản phẩm
                        </li>
                        <li>
                          • Nút <strong>Xóa</strong> để xoá nhanh sản phẩm không
                          còn sử dụng
                        </li>
                      </ul>

                      <p>
                        <strong>Stack:</strong> React · Node.js · MongoDB
                      </p>
                    </div>
                    {/* Chức năng 5 */}
                    <div style={{ marginTop: '32px' }}>
                      <h4 style={{ color: '#f0a500' }}>
                        5. Quản lý sản phẩm chi tiết & xử lý ảnh biến thể
                      </h4>

                      <img
                        src={DemoProductDetail}
                        alt="Chi tiết sản phẩm"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />

                      <img
                        src={DemoProductVariants}
                        alt="Ảnh biến thể"
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          margin: '12px 0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      />

                      <p>
                        Giao diện quản lý chi tiết từng sản phẩm sau khi được
                        import từ Taobao / Tmall / 1688. Cho phép xử lý nội
                        dung, hình ảnh, SKU và đăng biến thể sản phẩm lên hệ
                        thống.
                      </p>

                      <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                        <li>• Chỉnh sửa mô tả ngắn, mô tả dài và link nguồn</li>
                        <li>
                          • Gán trạng thái xử lý nội dung (ảnh, chữ, đăng sản
                          phẩm)
                        </li>
                        <li>• Quản lý ảnh bìa, ảnh mô tả, ảnh từng biến thể</li>
                        <li>• Tạo và sửa SKU theo logic thư mục sản phẩm</li>
                        <li>
                          • Nhân bản sản phẩm biến thể, gán giá bán và đăng
                        </li>
                        <li>
                          • Tích hợp upload ảnh lên Google Drive hoặc Google
                          Cloud Storage
                        </li>
                      </ul>

                      <p>
                        <strong>Stack:</strong> React.js · Node.js · MongoDB ·
                        Google Drive API · Google Cloud Storage
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
