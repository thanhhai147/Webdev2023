import React, { useState, useEffect } from "react";
import "./assets/css/fashion-showcase.css";
import {motion} from "framer-motion";

export default function Homepage() {
    const [mode, setMode] = useState("time")

    return (
        <motion.div exit={{opacity: 0}}>
            <div className="container">
                <div className="title-container">Trang Phục Việt Nam</div>
                <hr className="line-title"/>
                <div className="mode-btn">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle primary-bg-color secondary-color ps-3 pe-3 fs-6" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            { mode === "time" ? "Trang phục lịch sử" : "Trang phục vùng miền" }
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item pointer-cursor" onClick={() => setMode("time")}>Trang phục lịch sử</a></li>
                            <li><a className="dropdown-item pointer-cursor" onClick={() => setMode("space")}>Trang phục vùng miền</a></li>
                        </ul>
                    </div>
                </div>
                { 
                    mode === "time" ? 
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
                                    <div className="des"><i className="fa-solid fa-period"></i>Thời kì : Thời Hậu Lê-Tây Sơn</div>
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
                                <button id="prev" className="no-border" onClick={() => {
                                    let lists = document.querySelectorAll(".item");
                                    document.getElementById("slide").prepend(lists[lists.length - 1]);
                                }}><i className="fa-solid fa-chevron-left"></i></button>
                                <button id="next" className="no-border ms-3" onClick={() => {
                                    let lists = document.querySelectorAll(".item");
                                    document.getElementById("slide").appendChild(lists[0]);
                                }}><i className="fa-solid fa-chevron-right"></i></button>
                            </div>  
                        </div>
                    </div>  
                    : 
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
                                <button id="prev1" className="no-border" onClick={() => {
                                    let lists = document.querySelectorAll(".item0");
                                    document.getElementById("slide1").prepend(lists[lists.length - 1]);
                                }}><i className="fa-solid fa-chevron-left"></i></button>
                                <button id="next1" className="no-border ms-3" onClick={() => {
                                    let lists = document.querySelectorAll(".item0");
                                    document.getElementById("slide1").appendChild(lists[0]);
                                }}><i className="fa-solid fa-chevron-right"></i></button>
                            </div>  
                        </div>
                    </div> 
                }
            </div>   
        </motion.div>
    );
};