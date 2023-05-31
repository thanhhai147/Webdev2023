import React from "react";
import "./assets/css/fashion-showcase.css";
import {motion} from "framer-motion";
import { useEffect } from "react";

export default function Homepage() {
    useEffect(() => {
        document.getElementById("next").onclick = function () {
          let lists = document.querySelectorAll(".item");
          document.getElementById("slide").appendChild(lists[0]);
        };
        document.getElementById("prev").onclick = function () {
          let lists = document.querySelectorAll(".item");
          document.getElementById("slide").prepend(lists[lists.length - 1]);
        };
      }, []);
    return (
        <motion.div exit={{opacity: 0}}>
            <div className="container">
                <div className="title-container">Trang Phục Việt Nam</div>
                <hr className="line-title"/>
                <div id="fashion-showcase" className="rounded-5">
                    <div id="slide" className="rounded-5">
                        <div className="item item11 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Dài<br></br> Hiện Đại</div>
                                <div className="des"><i className="fa-solid fa-period"></i>Thời kì: Thế Kỉ 20-Ngày Nay</div>
                                <div className="history">
                                Ngày nay, áo dài xuất hiện khắp nơi trên thế giới. Nhiều du khách nước ngoài đã có những ấn tượng rất tốt về tà áo dài Việt Nam. Họ cảm thấy được tiếp đón rất nồng hậu khi những tà áo dài bay bay trước gió ở phi trường. Thật tiếc cho những ai đến Việt Nam mà không mang 
                                về một chiếc áo dài làm kỷ niệm và để khoe với những ai chưa từng đến Việt Nam. Áo dài trong các cuộc thi sắc đẹp lớn, trong cuộc hội nghị quan trọng của thế giới, áo dài trắng thướt tha của nữ sinh... Tất cả đều mang trong mình vẻ đẹp tiềm ẩn, vẻ đẹp rất Việt Nam....
                                </div>
                            </div>
                        </div>
                        <div className="item item1 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Cánh Ngắn</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Thời kì : Thời Hùng Vương</div>
                                <div className="history">
                                    Phụ nữ thời Hùng Vương thường mặc áo ngắn đến bụng, xẻ ngực, bó sát vào người, phía trong mặc yếm kín ngực có cổ tròn sát cổ, trang trí thêm hình những tấm hạt gạo.Cũng có những loại áo cánh ngắn, cổ vuông, để hở một phần vai và ngực hoặc kín ngực, hở một phần vai và trên lưng. Hai loại sau có thể là loại mặc chui đầu hay cài khuy bên trái. Trên áo đều có hoa văn trang trí. Thắt lưng có ba hàng chấm trang trí cách đều nhau quấn ngang bụng.Phụ nữ thời đó còn mặc áo chui đầu vạt trái, búi tóc, đi chân trần.
                                </div>
                            </div>
                        </div>
                        <div className="item item2 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Váy Dài</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Thời kì : Thời Lý</div>
                                <div className="history">
                                Trang phục phụ nữ người Việt cổ bao gồm khăn đội đầu (khăn vuông), khăn vấn tóc, yếm, thắt lưng, áo cánh, váy, áo tứ thân, áo năm thân.
                                Chiếc yếm của phụ nữ là một miếng vải hình vuông khoét một góc tạo thành cổ, phần vải còn lại tạo thành chiếc yếm ở trước ngực làm đồ lót mặc sát người của phụ nữ Việt Nam. Yếm thường được may bằng lụa hoặc vải nõn sợi nhỏ hoặc vải quyến đủ các màu sắc trừ màu đen.
                                Độ dài thắt lưng khoảng 1,5-2m, rộng chừng 15-20cm. Thắt lưng thường được dệt bằng lụa sồi, có độ dài quấn quanh người hai vòng mà vẫn còn dư ra một đoạn để có thể thắt nút giọt lệ.
                                </div>
                            </div>
                        </div>
                        <div className="item item3 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Rộng Tay</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Thời kì : Thời Trần-Thời Tiền Lê</div>
                                <div className="history">
                                Vải vóc nước ta thời đó thì có các loại the Cát Liễu, the hoa tim táo sợi thẳng, the hợp, lụa bóng bông, ỷ, lĩnh, là, hài tơ khá lạ mà tốt. Hai thứ gai, tơ chuối thì được chắp lại làm vải, mịn như lụa nõn, rất hợp mặc vào mùa hè.
                                Từ thế kỷ 13-15 đặc trưng với áo có phần ống tay rộng, phần áo choàng có cổ áo khoét sâu rộng, bên trong mặc một chiếc yếm quây.Đầu nhà Lê, phần cổ áo đã được may kín đáo hơn với phần cổ tròn, ống tay gọn gàng hơn. Tuy nhiên, màu sắc lại có phần cầu kỳ và bắt mắt hơn.
                                Phụ nữ cũng mặc áo đen, song áo trắng bên trong lộ rõ ra ngoài.
                                </div>
                            </div>
                        </div>
                        <div className="item item4 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Rộng Tay</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Thời kì : Thời Trần-Thời Tiền Lê</div>
                                <div className="history">
                                Vải vóc nước ta thời đó thì có các loại the Cát Liễu, the hoa tim táo sợi thẳng, the hợp, lụa bóng bông, ỷ, lĩnh, là, hài tơ khá lạ mà tốt. Hai thứ gai, tơ chuối thì được chắp lại làm vải, mịn như lụa nõn, rất hợp mặc vào mùa hè.
                                Từ thế kỷ 13-15 đặc trưng với áo có phần ống tay rộng, phần áo choàng có cổ áo khoét sâu rộng, bên trong mặc một chiếc yếm quây.Đầu nhà Lê, phần cổ áo đã được may kín đáo hơn với phần cổ tròn, ống tay gọn gàng hơn. Tuy nhiên, màu sắc lại có phần cầu kỳ và bắt mắt hơn.
                                Phụ nữ cũng mặc áo đen, song áo trắng bên trong lộ rõ ra ngoài.
                            </div>
                        </div>
                        </div>
                        <div className="item item5 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Dài <br />Tứ Thân</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Thời kì : Thời Mạc</div>
                                <div className="history">
                                Vào thời đại này, phụ nữ mặc áo dài tứ thân cổ tròn, thắt lưng buông dài trước bụng, váy dài và rộng. Tóc thì để dài, rẽ đường ngôi giữa. Những người phụ nữ quý tộc có gu ăn mặc cầu kì hơn, sử dụng những dải xiêm màu sắc rủ xuống chân, góp phần mang lại vẻ đẹp yểu điệu, thướt tha.
                                Áo tứ thân gồm 4 thân áo, hai tà trước và hai tà sau. Vạt trước được tác riêng, vạt sau được khâu lại gọi là sống áo. Chiều dài của áo quá đầu gối khoảng 20 cm. Áo không có cúc mà sẽ được bộc vạt ở trước hoặc có dây thắt riêng.
                                </div>
                            </div>
                        </div>
                        <div className="item item6 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Tay Rộng</div>
                                <div className="des"><i className="fa-solid fa-period black-color"></i>Thời kì : Thời Hậu Lê</div>
                                <div className="history">
                                Cho đến thời kỳ Hậu Lê mở màn Open nhiều kiểu trang phục khác nhau và những bộ váy áo đã bộc lộ được nét văn hóa truyền thống riêng. Những bộ trang phục của phụ nữ thời kỳ Hậu Lê rất kín kẽ với nhiều lớp áo mang nhiều sắc tố khác nhau. Đặc trưng nhất vẫn là phần ống tay rộng. Trang phục hầu gái ( hay quan hầu trong cung ) có áo cổ tròn, hoàn toàn có thể vạt áo tay dài hay ngắn, váy đơn hay xếp lớp, tay áo rộng hay hẹp …
                                Trang phục hầu gái có áo cổ tròn, có thể vạt áo tay dài hay ngắn, váy đơn hay xếp lớp, tay áo rộng hay hẹp...
                                </div>
                            </div>
                        </div>
                        
                        <div className="item item7 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Rộng Tay</div>
                                <div className="des"><i className="fa-solid fa-period"></i>Thời kì : Thời Hậu Lê</div>
                                <div className="history">
                                Cho đến thời kỳ Hậu Lê mở màn Open nhiều kiểu trang phục khác nhau và những bộ váy áo đã bộc lộ được nét văn hóa truyền thống riêng. Những bộ trang phục của phụ nữ thời kỳ Hậu Lê rất kín kẽ với nhiều lớp áo mang nhiều sắc tố khác nhau. Đặc trưng nhất vẫn là phần ống tay rộng. Trang phục hầu gái ( hay quan hầu trong cung ) có áo cổ tròn, hoàn toàn có thể vạt áo tay dài hay ngắn, váy đơn hay xếp lớp, tay áo rộng hay hẹp …
                                Trang phục hầu gái có áo cổ tròn, có thể vạt áo tay dài hay ngắn, váy đơn hay xếp lớp, tay áo rộng hay hẹp...
                                </div>                             
                            </div>
                        </div>
                        <div className="item item8 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Bộ Váy Áo</div>
                                <div className="des"><i className="fa-solid fa-period"></i>Thời kì : Thời Hậu Lê-Tây Sơn</div>
                                <div className="history">
                                Cho đến thời kỳ Hậu Lê mở màn Open nhiều kiểu trang phục khác nhau và những bộ váy áo đã bộc lộ được nét văn hóa truyền thống riêng. Những bộ trang phục của phụ nữ thời kỳ Hậu Lê rất kín kẽ với nhiều lớp áo mang nhiều sắc tố khác nhau. Đặc trưng nhất vẫn là phần ống tay rộng. Trang phục hầu gái ( hay quan hầu trong cung ) có áo cổ tròn,
                                hoàn toàn có thể vạt áo tay dài hay ngắn, váy đơn hay xếp lớp, tay áo rộng hay hẹp …
                                Trang phục phụ nữ thời Tây Sơn khá cầu kỳ với những chi tiết cụ thể thêu, may đắp tỉ mỉ.
                                </div>
                            </div>
                        </div>
                        <div className="item item9 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Bộ Váy Áo</div>
                                <div className="des"><i class="fa-solid fa-period"></i>Thời kì : Thời Hậu Lê-Tây Sơn</div>
                                <div className="history">
                                Cho đến thời kỳ Hậu Lê mở màn Open nhiều kiểu trang phục khác nhau và những bộ váy áo đã bộc lộ được nét văn hóa truyền thống riêng. Những bộ trang phục của phụ nữ thời kỳ Hậu Lê rất kín kẽ với nhiều lớp áo mang nhiều sắc tố khác nhau. Đặc trưng nhất vẫn là phần ống tay rộng. Trang phục hầu gái ( hay quan hầu trong cung ) có áo cổ tròn,
                                hoàn toàn có thể vạt áo tay dài hay ngắn, váy đơn hay xếp lớp, tay áo rộng hay hẹp …
                                Trang phục phụ nữ thời Tây Sơn khá cầu kỳ với những chi tiết cụ thể thêu, may đắp tỉ mỉ.
                                </div>
                            </div>
                        </div>
                        <div className="item item10 rounded-5">
                            <div className="content pt-3 pb-3 ps-4 pe-4 rounded-5">
                                <div className="name">Áo Dài</div>
                                <div className="des"><i className="fa-solid fa-period"></i>Thời kì: Thời Nhà Nguyễn</div>
                                <div className="history">
                                Đời sống xã hội trong thời kỳ này có tác động ảnh hưởng không nhỏ đến trang phục của dân cư. Nếu như trang phục của những tầng lớp thống trị ngày càng bị “ pha tạp ” theo lối đua đòi cải cách nửa mùa, thì trong xã hội, những phục trang truyền thống lịch sử như áo dài, áo yếm, áo tứ thân,
                            khăn mỏ quạ, nón quai thao … đã trở thành hơi thở và là kết tinh văn hóa truyền thống của cả dân tộc bản địa. Trong khi chiếc yếm đào vượt khỏi chốn cung đình để cùng người phụ nữ cần lao “ dầm mưa dãi nắng ” ngoài đồng ruộng, hay cùng áo tứ thân lượt là trong những buổi hội Lim, thì thời trang phương Tây với những chiếc đầm xòe công sở.
                                </div>
                            </div>
                        </div>
                        <div className="buttons d-flex justify-content-end pe-3">
                            <button id="prev" className="no-border"><i className="fa-solid fa-chevron-left"></i></button>
                            <button id="next" className="no-border ms-3"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>  
                    </div>
                </div> 
            </div>   
        </motion.div>
    );
};