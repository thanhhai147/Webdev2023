import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Policy() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <motion.div exit={{opacity: 0}}>
            <div className="policy default-height mt-5">
                <div className="container element-bg-color p-4 shadow">
                    <div className="policy-title mb-3">
                        <p className="fs-4 fw-bold mb-0 primary-color">Điều khoản dịch vụ</p>
                    </div>
                    <div className="policy-child mb-3">
                        <p className="fs-6 fw-500 mb-0 bold-grey-color">1. Giới thiệu</p>
                    </div>
                    <div className="policy-content mb-3 word-break-word">
                        <p className="fs-6 mb-0">
                            Chào mừng quý khách hàng đến với website chúng tôi.

                            Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.

                            Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.
                        </p>
                    </div>
                    <div className="policy-child mb-3">
                        <p className="fs-6 fw-500 mb-0 bold-grey-color">2. Hướng dẫn sử dụng website</p>
                    </div>
                    <div className="policy-content mb-5 word-break-word">
                        <p className="fs-6 mb-0">
                            Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.

                            Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
                        </p>
                    </div>
                    <div className="policy-title mb-3">
                        <p className="fs-4 fw-bold mb-0 primary-color">Chính sách bảo mật</p>
                    </div>
                    <div className="policy-content mb-3 word-break-word">
                        <p className="fs-6 mb-0">
                            Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu thập và sử dụng thông tin cá nhân của mình thông qua việc sử dụng trang web, bao gồm mọi thông tin có thể cung cấp thông qua trang web khi Quý khách đăng ký tài khoản, đăng ký nhận thông tin liên lạc từ chúng tôi, hoặc khi Quý khách mua sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng tôi.

                            Chúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc khi cần thiết liên quan đến việc Quý khách sử dụng website của chúng tôi, để trả lời các câu hỏi hoặc gửi tài liệu và thông tin Quý khách yêu cầu.

                            Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của khách hàng. 

                            Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};