import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();
    return ( 
        <div className="pt-[4rem] text-[#282e3e] dark:text-[#fff] bg-[#f6f7fb] dark:bg-[#0a092d] border-t-[1px] border-solid border-[#edeff4]">
            <div className="container h-full flex flex-col">
                <div className="max-w-[81.25rem] flex items-start flex-row flex-wrap mb-[4rem] jusstify-between gap-y-3 justify-items-stretch">
                    <div className="basis-1/2 md:basis-1/4">
                        <h5 className="text-[16px] font-bold mb-[1.5rem]">{t("footer.about.about_us")}</h5>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.about_quizlet")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.careers")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.advertise")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.dowload")}</Link>
                        </div>
                    </div>
                     <div className="basis-1/2 md:basis-1/4">
                        <h5 className="text-[16px] font-bold mb-[1.5rem]">{t("footer.about.about_us")}</h5>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.about_quizlet")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.careers")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.advertise")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.dowload")}</Link>
                        </div>
                    </div>
                     <div className="basis-1/2 md:basis-1/4">
                        <h5 className="text-[16px] font-bold mb-[1.5rem]">{t("footer.about.about_us")}</h5>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.about_quizlet")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.careers")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.advertise")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.dowload")}</Link>
                        </div>
                    </div>
                     <div className="basis-1/2 md:basis-1/4">
                        <h5 className="text-[16px] font-bold mb-[1.5rem]">{t("footer.about.about_us")}</h5>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.about_quizlet")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.careers")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.advertise")}</Link>
                        </div>
                        <div className="text-[14px] font-[400] mb-[1rem]">
                            <Link to="" className="hover:text-[#423ed8] text-[#282e3e]">{t("footer.about.dowload")}</Link>
                        </div>
                    </div>
                </div>
                <div className="py-4"></div>
            </div>
        </div> 
    );
}
 
export default Footer;