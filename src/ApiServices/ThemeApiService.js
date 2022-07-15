class ThemeService {
  constructor(props) {
    this.theme = props;
  }
  getBarsColors() {
    return this.theme.gray.gray_1;
  }
  getThemeObject() {
    return this.theme;
  }
}
export default ThemeService;
