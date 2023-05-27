class Constant {
    constructor() {
      this.contracts = [
        { code_name: "sale", name: "mua bán" },
        { code_name: "rent", name: "cho thuê" },
      ];
      this.collections = [
        { code_name: "apartment", name: "căn hộ" },
        { code_name: "house", name: "nhà ở" },
        { code_name: "land", name: "đất" },
        { code_name: "commercial", name: "văn phòng, mặt bằng kinh doanh" },
        { code_name: "motel", name: "nhà trọ" },
      ];
      this.types = {
        apartment: [
          {code_name: "flat", name: "chung cư"},
          {code_name: "duplex", name: "duplex"},
          {code_name: "penthouse", name: "penthouse"},
          {code_name: "service/mini", name: "căn hộ dịch vụ, mini"},
          {code_name: "housing_project", name: "tập thể, cư xá"},
          {code_name: "officetel", name: "officetel"}
        ],
        house: [
          {code_name: "townhouse", name: "nhà mặt phố, mặt tiền"},
          {code_name: "alley", name: "nhà ngõ, hẻm"},
          {code_name: "masion", name: "nhà biệt thự"},
          {code_name: "terrace", name: "nhà phố liền kề"}
        ],
        land: [
          {code_name: "residental", name: "đất thổ cư"},
          {code_name: "project", name: "đất nền dự án"},
          {code_name: "agricultural", name: "đất nông nghiệp"},
          {code_name: "industrial", name: "đất nông nghiệp"},
        ],
        commercial: [
          {code_name: "premise", name: "mặt bằng kinh doanh"},
          {code_name: "office", name: "văn phòng"},
          {code_name: "shophouse", name: "shophouse"},
          {code_name: "officetel", name: "officetel"}
        ]
      };
      this.features = {
        apartment: [
          {code_name: "corner", name: "căn góc"}
        ],
        house: [
          {code_name: "parking_alley", name: "hẻm xe hơi"},
          {code_name: "expanding_tail", name: "nở hậu"},
          {code_name: "street_side", name: "mặt tiền"},
        ],
        land: [
          {code_name: "parking_alley", name: "hẻm xe hơi"},
          {code_name: "expanding_tail", name: "nở hậu"},
          {code_name: "street_side", name: "mặt tiền"},
        ],
      };
      this.directions = [
        {code_name: "east", name: "đông"},
        {code_name: "west", name: "tây"},
        {code_name: "south", name: "nam"},
        {code_name: "north", name: "bắc"},
        {code_name: "northeast", name: "đông bắc"},
        {code_name: "southeast", name: "đông nam"},
        {code_name: "northwest", name: "tây bắc"},
        {code_name: "southwest", name: "tây nam"},
      ];
      this.legalities = [
        {code_name: "complete", name: "đã có sổ"},
        {code_name: "waiting", name: "đang chờ sổ"},
        {code_name: "others", name: "giấy tờ khác"}
      ];
      this.furnitures = [
        {code_name: "luxury", name: "nội thất cao cấp"},
        {code_name: "fully", name: "nội thất đầy đủ"},
        {code_name: "available", name: "hoàn thiện cơ bản"},
        {code_name: "unfinished", name: "bàn giao thô"}
      ];
      this.status = [
        {code_name: "handover", name: "đã bàn giao"},
        {code_name: "yet_handover", name: "chưa bàn giao"},
      ];
      this.priceRange = {
        min: 0,
        max: 30000000000,
        step: 100000000,
      };
      this.areaRange = {
        min: 0,
        max: 1000,
        step: 5,
      };
      this.bedroomRange = {
        min: 1,
        max: 10,
        step: 1
      };
      this.bathroomRange = {
        min: 1,
        max: 10,
        step: 1
      }
    };
  };
  
  export default new Constant();
  