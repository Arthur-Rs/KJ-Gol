export default (index: number, name: string, point: number) => {
  return `
  <div class="box">
    <div>
      <div class="box-number"><span>${index}</span></div>
      <div class="box-category">
        <span
          class="iconify icon"
          data-icon="maki:soccer-11"
          data-inline="false"
        ></span>
      </div>
      <div class="box-time">
        <span
          class="iconify icon"
          data-icon="bi:shield-fill"
          data-inline="false"
        ></span>
      </div>
      <div class="box-name"><span>${name}</span></div>

      <div class="box-star">
        <span
          class="iconify icon"
          data-icon="ant-design:star-filled"
          data-inline="false"
        ></span>
      </div>
    </div>
    <div>
      <div class="box-point"><span>${point}</span></div>
    </div>
  </div>
`;
};
