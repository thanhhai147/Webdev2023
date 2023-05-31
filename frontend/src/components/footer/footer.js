import React from "react";
import "./assets/css/footer.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { useEffect } from "react";

// export default function Footer() {
//   return (
//     <div id="footer">
//         <div className="footer-container">
//               <div className="logo-footer">
//                   <img src={process.env.PUBLIC_URL + "jpg/logofinal.svg"} alt={process.env.PUBLIC_URL + "jpg/no-image-pc.jpg"} width="70" className="logo" />
//                   <p className="title-logo-container">Việt Nam Tour</p>
//               </div>
//               <div className="follow-us">
//                   <p className="title2 title">Follow us</p>
//                   <i  className="bi bi-facebook anh1"></i>
//                   <i  className="bi bi-instagram anh2"></i>
//                   <i  className="bi bi-twitter anh3"></i>
//                   <i  className="bi bi-youtube anh4"></i>
//               </div>
//               <div className="fanpage" >
//                     <p className="title">Fanpage</p>
//                     <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=100093005413578" data-tabs="s&#x1ef1; ki&#x1ec7;n" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=100093005413578" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100093005413578">Việt Nam Tour</a></blockquote></div>
//               </div>
//               <div className="call-us">
//                   <p className="title3 title">Call us</p>
//                   <p className="title4"><i className="bi bi-phone">0862327430</i></p>
//                   <p className="title4"><i className="bi bi-phone">0903719548</i></p>
//               </div> 
//               <hr/>
//         </div>
//         <div className="end">
//             <p>Chính sách bảo mật</p>
//             <p>Điều khoản dịch vụ</p>
//             <p>Phản Hồi</p>
//         </div>
//     </div>
    
//   );
// }

export default function Homepage() {
    useEffect(() => {
        document.getElementById("next1").onclick = function () {
          let lists = document.querySelectorAll(".item0");
          document.getElementById("slide1").appendChild(lists[0]);
        };
        document.getElementById("prev1").onclick = function () {
          let lists = document.querySelectorAll(".item0");
          document.getElementById("slide1").prepend(lists[lists.length - 1]);
        };
      }, []);
    return (
        <motion.div exit={{opacity: 0}}>
            <div className="container">
                <div className="title-container">Trang Phục Việt Nam</div>
                <hr className="line-title"/>
                <div id="fashion-showcase1" className="rounded-5">
                    <div id="slide1" className="rounded-5">
                        <div className="item0 item-11 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Cổ Vòng<br></br>Vận Xà Rông</div>
                                <div className="des"><i className="fa-solid fa-period"></i>Địa phương: dân tộc khmer</div>
                                <div className="history">
                                Trang phục nam giới của người Khmer rất đơn giản, họ chỉ mặc xà rông và ở trần. Khi ra đường thì họ sẽ mặc áo bà ba đen giống như những người nông dân Kinh”. Trang phục đời thường của người Khmer cũng có sự khác biệt rất lớn giữa nữ giới và nam giới. Phụ nữ Khmer thường mặc nhiều loại váy khác nhau nhưng người ta thấy thường xuyên nhất là Sămpết chôn Kpal. Đây là loại váy được làm bằng vải rộng, khi vận quấn quanh người, phần còn lại luồn qua hai chân thành một loại quần phồng ngắn.
                                </div>
                            </div>
                        </div>
                        <div className="item0 item-1 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Bít Trôốc</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Địa phương: dân tộc Mường</div>
                                <div className="history">
                                Một bộ trang phục truyền thống của phụ nữ dân tộc Mường về cơ bản gồm những yếu tố sau: chiếc khăn trắng thắt trên đầu, người Mường gọi là bít trôốc (hoặc mũ); áo ngắn, có độ dài vừa chấm eo lưng; áo chùng, tương tự như áo ngắn nhưng được kéo dài xuống ngang đầu gối, phía dưới hơi xòe rộng, hai vạt áo buông tự do tạo cảm giác mềm mại (ngày nay thường chỉ thấy trong các lễ hội); yếm; váy, gồm hai phần chính là cạp váy và chân váy, cạp váy có màu sắc rực rỡ, được dệt rất công phu và là bộ phận nổi bật trên trang phục.
                                </div>
                            </div>
                        </div>
                        <div className="item0 item-2 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name"> Ao êkei</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Địa phương: dân tộc Ê đê</div>
                                <div className="history">
                                Trang phục nữ, người Ê Đê mặc miếng (váy tấm) bằng thao tác choàng quấn quanh eo, che nửa thân dưới. Đó là một tấm vải hình chữ nhật, chiều rộng quấn trục thân dài khoảng 1,3m, chiều dài buông xuôi khoảng gần 1m. Khi mặc, gấu váy có thể buông dài tới mắt cá chân. Mép ngoài ở đầu trên, quần đè dang sườn bên phải. Ao mniê (áo nữ) là loại áo chui đầu (xẻ ngang bờ vai trái sang vai phải), ôm sát vào thân (không rộng thùng thình, cũng không may bó), buông xuôi tới thắt lưng, vạt trước và sau bằng nhau, không hở tà, có loại dài tay, ngắn tay và cộc tay.
                                </div>
                            </div>
                        </div>
                        <div className="item0 item-3 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Luy Hâu</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Địa phương: dân tộc Khơ Mú</div>
                                <div className="history">
                                Bộ trang phục truyền thống của phụ nữ người Khơ Mú gồm có: khăn piêu màu đen đội đầu, áo cỏm màu đen với hàng cúc ở ngực, nếu cúc hình chữ nhật thì gọi là "mặc pam”, còn hình con bướm thì gọi là "mặc pem”, ngoài ra còn có dây lưng, váy, xà cạp, chùm cài đầu, bộ xà tích thắt lưng… Khăn đội đầu được may bằng vải đen dài khoảng gần 2 m, rộng bằng một khổ vải hẹp 30 cm. 
                                Ngày nay, khăn đội đầu của phụ nữ người Khơ Mú được trang trí thêm các họa tiết hoa văn bằng chỉ thêu, những sợi tua và hoa vải màu ở hai đầu khăn.
                                </div>
                            </div>
                        </div>
                        <div className="item0 item-4 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Aw Tah</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Địa phương: dân tộc Chăm</div>
                                <div className="history">
                                Không sặc sỡ như nữ phục khác song trang phục truyền thống của phụ nữ Chăm lại có sức hút lạ thường. Không cầu kì, lộng lẫy, phụ nữ Chăm xem áo dài truyền thống là thứ trang phục thiêng liêng nhất, đẹp nhất. Bộ trang phục hoàn chỉnh gồm áo dài may kín, không xẻ tà, phần dưới được may vừa bước chân của người phụ nữ sao cho bước đi vừa phải, duyên dáng; váy đi kèm với áo thường cùng màu áo chỉ khác nhau độ đậm nhạt.
                                Điểm nhấn trên bộ trang phục chính là thắt lưng được buộc chéo qua ngực và vòng quanh eo.
                            </div>
                        </div>
                        </div>
                        <div className="item0 item-5 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Cóm<br />Váy Đen</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Địa phương: dân tộc Thái</div>
                                <div className="history">
                                Mỗi dân tộc của nước ta đều có trang phục truyền thống riêng và dân tộc Thái cũng vậy. người Thái nổi tiếng với áo cóm, váy đen và chiếc khăn piêu đã đi vào thơ ca, âm nhạc. Đây cũng là trang phục dân tộc Việt Nam đẹp, tôn lên vẻ đẹp của người mặc và làm đa dạng thêm nét đẹp văn hóa của người Việt.
                                Dân tộc Thái được chia thành hai nhóm là người Thái Đen và người Thái Trắng. Tuy nhiên, trang phục truyền thống của người Thái vẫn thống nhất với 3 món chính là áo cóm, váy đen và chiếc khăn piêu.
                                </div>
                            </div>
                        </div>
                        <div className="item0 item-6 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Dài</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Địa phương: dân tộc Kinh</div>
                                <div className="history">
                                Áo dài là một trong những trang phục dân tộc Việt Nam đẹp đã được từ điển thế giới ghi nhâận với tên gọi “ao dai”. Đây là trang phục của phụ nữ người Kinh nói riêng và cả nước ta nói chung. Tà áo dài với vẻ đẹp mềm mại, thướt tha, vừa đủ kín đáo nhưng đồng thời tôn lên những đường nét gợi cảm của người mặc. 
                                Áo dài truyền thống của người người Việt có lịch sử hình thành và phát triển qua rất nhiều thời kỳ, xuất hiện cách đây hàng ngàn năm. Tiền thân của trang phục này là áo giao lĩnh với đường may rộng, cổ tay rộng, xẻ hai bên hông và tà áo dài chấm gót. 
                                </div>
                            </div>
                        </div>
                        
                        <div className="item0 item-7 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name"></div>
                                <div className="des"><i className="fa-solid fa-period"></i>Địa phương: dân tộc Nùng</div>
                                <div className="history">
                                Trang phục truyền thống của người Nùng có sự phân biệt theo lứa tuổi và giới tính, rất phong phú về chủng loại. Trang phục nam gồm có áo, quần, thắt lưng, khăn đội đầu, túi vải thêu, đồ trang sức bằng bạc… Quần áo trẻ em cũng có sự khác biệt so với các nhóm Nùng khác. Nét khác biệt đó thể hiện ở áo, quần, mũ độ đầu. Trong đó chiếc mũ được trang trí khá cầu kì với những hoa văn, họa tiết sặc sỡ, đẹp mắt…
                                Trang phục nam giới thường đơn giản, gồm áo ngắn tứ thân, tay bó, có 3 túi, cổ đứng, vạt áo và cổ có thêu hoa văn hình răng cưa. Kiểu dáng quần được may theo kiểu quần ta, ống đứng. 
                                </div>                             
                            </div>
                        </div>
                        <div className="item0 item-8 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Chàm</div>
                                <div className="des"><i className="fa-solid fa-period"></i>Địa phương: dân tộc Tày</div>
                                <div className="history">
                                Một bộ trang phục đơn giản nhưng cũng tạo ra nét riêng biệt của nó. Và mang lại cho người mặc vẻ đẹp thuần khiết. Trang Phục của người Tày đơn giản một sắc chàm, nét đặc sắc thể hiện ở những mẫu hoa văn trên vải của họ.
                                Nhìn chung người Tày thường mặc quần áo vải bông nhuộm chàm nên trang phục của họ màu chủ đạo là màu chàm, phụ nữ thường chít khăn mỏ quạ, mặc áo năm thân có thắt lưng, đeo vòng cổ, tay, chân bằng bạc.
                                Loại vải dệt hoa văn mầu đen trên nền vải trắng là loại vải để may mặt chăn, loại hình trang trí này phổ biến trong các dân tộc nói ngôn ngữ Tày -Thái.
                                </div>
                            </div>
                        </div>
                        <div className="buttons d-flex justify-content-end pe-3">
                            <button id="prev1" className="no-border"><i className="fa-solid fa-chevron-left"></i></button>
                            <button id="next1" className="no-border ms-3"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>  
                    </div>
                </div> 
            </div>   
        </motion.div>
    );
};
