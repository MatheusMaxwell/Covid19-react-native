export default class AppSingleton {

    static myInstance = null;

    _countryCode = '';
    _countryName = '';


    /**
     * @returns {AppSingleton}
     */
    static getInstance() {
        if (AppSingleton.myInstance == null) {
            AppSingleton.myInstance = new AppSingleton();
        }

        return this.myInstance;
    }

    getCountryCode() {
        return this._countryCode;
    }

    setCountryCode(code) {
        this._countryCode = code;
    }

    getCountryName() {
        return this._countryName;
    }

    setCountryName(name) {
        this._countryName = name;
    }
}