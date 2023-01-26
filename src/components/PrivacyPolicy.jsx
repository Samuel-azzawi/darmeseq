import headLogo from "./photos/DarmeseqHeader.png";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import "./PrivacyPolicy.css";
function PrivacyPolicy() {
  const { language } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="app">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={headLogo}
        alt="img"
        className="headLogo"
      />
      <Dropdown />
      {language === "عربي" ? (
        <p>
          At Darmeseq.com, we are committed to protecting the privacy of our
          users. This privacy policy applies to our website and explains how we
          collect, use, and disclose information that we gather through the
          website.
          <br />
          <br />
          Information Collection and Use
          <br />
          <br />
          We collect information from our users in several ways, including when
          they submit contact information on our website. The information we
          collect may include the user's name, email address, and phone number.
          We use this information to respond to inquiries and provide
          information about our services.
          <br />
          <br />
          We also collect information through the use of cookies and other
          technologies. Cookies are small data files that are stored on your
          device when you visit our website. They allow us to track your
          browsing activity and preferences, and to personalize your experience
          on our website. You can choose to disable cookies in your browser
          settings, but this may limit your ability to use certain features of
          our website.
          <br />
          <br />
          We also use Google Analytics to collect information about how users
          interact with our website. This information is used to improve the
          website and the services we offer.
          <br />
          <br />
          Photo and Image Usage
          <br />
          <br />
          We may collect and publish photos and images of our work on our
          website. By using our website, you consent to our use of these photos
          and images for the purpose of showcasing our work.
          <br />
          <br />
          Disclosure of Information
          <br />
          <br />
          We may disclose information about our users in certain circumstances,
          such as:
          <br />
          <br />
          <ul>
            <li>
              To comply with legal requirements, such as a subpoena or court
              order.
            </li>
            <li>To enforce our terms of use or other agreements.</li>
            <li>
              To protect the rights, property, or safety of Darmeseq, our users,
              or others.
            </li>
          </ul>
          <br />
          <br />
          We do not share, sell, or rent personal information to third parties
          for their marketing purposes.
          <br />
          <br />
          Security
          <br />
          <br />
          We take reasonable measures to protect the security of the information
          we collect. However, no data transmission over the internet can be
          guaranteed to be 100% secure. As a result, we cannot ensure or warrant
          the security of any information you transmit to us, and you do so at
          your own risk.
          <br />
          <br />
          Changes to This Policy
          <br />
          <br />
          We may update this privacy policy from time to time. If we make
          changes, we will post the updated policy on our website and update the
          effective date at the top of this page. By continuing to use our
          website after we make changes, you consent to the revised policy.
          <br />
          <br />
          Contact Us
          <br />
          <br />
          If you have any questions or concerns about our privacy policy, please
          contact us at{" "}
          <button
            className="drop-down-button"
            onClick={() => (window.location = "mailto:info@darmeseq.com")}
          >
            info@darmeseq.com
          </button>
        </p>
      ) : (
        <p className="arabicText">
          في Darmeseq.com ، نحن ملتزمون بحماية خصوصية مستخدمينا. تنطبق سياسة
          الخصوصية هذه على موقعنا وتشرح كيف نجمع المعلومات التي نجمعها من خلال
          الموقع ونستخدمها ونكشف عنها.
          <br />
          <br />
          جمع المعلومات واستخدامها
          <br />
          <br />
          نقوم بجمع المعلومات من مستخدمينا بعدة طرق ، بما في ذلك عندما يرسلون
          معلومات الاتصال على موقعنا. قد تتضمن المعلومات التي نجمعها اسم
          المستخدم وعنوان البريد الإلكتروني ورقم الهاتف. نستخدم هذه المعلومات
          للرد على الاستفسارات وتقديم معلومات حول خدماتنا.
          <br />
          <br />
          نقوم أيضًا بجمع المعلومات من خلال استخدام ملفات تعريف الارتباط
          والتقنيات الأخرى. ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم
          تخزينها على جهازك عندما تزور موقعنا على الإنترنت. إنها تسمح لنا بتتبع
          نشاط التصفح والتفضيلات الخاصة بك ، وتخصيص تجربتك على موقعنا. يمكنك
          اختيار تعطيل ملفات تعريف الارتباط في إعدادات المتصفح الخاص بك ، ولكن
          هذا قد يحد من قدرتك على استخدام ميزات معينة في موقعنا.
          <br />
          <br />
          نستخدم أيضًا Google Analytics لجمع معلومات حول كيفية تفاعل المستخدمين
          مع موقعنا على الويب. تُستخدم هذه المعلومات لتحسين الموقع والخدمات التي
          نقدمها.
          <br />
          <br />
          استخدام الصور والصورة
          <br />
          <br />
          قد نجمع صورًا وصورًا لعملنا وننشرها على موقعنا. باستخدام موقعنا ، فإنك
          توافق على استخدامنا لهذه الصور والصور لغرض عرض عملنا.
          <br />
          <br />
          الإفصاح عن المعلومات
          <br />
          <br />
          قد نكشف عن معلومات حول مستخدمينا في ظروف معينة ، مثل:
          <br />
          <br />
          <ul>
            <li>
              للامتثال للمتطلبات القانونية ، مثل أمر استدعاء أو أمر محكمة.
            </li>
            <li>لفرض شروط الاستخدام الخاصة بنا أو الاتفاقيات الأخرى.</li>
            <li>
              لحماية حقوق أو ممتلكات أو سلامة Darmeseq أو مستخدمينا أو غيرهم.
            </li>
          </ul>
          <br />
          <br />
          نحن لا نشارك أو نبيع أو نؤجر المعلومات الشخصية لأطراف ثالثة لأغراض
          التسويق الخاصة بهم.
          <br />
          <br />
          حماية
          <br />
          <br />
          نتخذ تدابير معقولة لحماية أمن المعلومات التي نجمعها. ومع ذلك ، لا يمكن
          ضمان أن يكون نقل البيانات عبر الإنترنت آمنًا بنسبة 100٪. نتيجة لذلك ،
          لا يمكننا ضمان أو ضمان أمن أي معلومات ترسلها إلينا ، وأنت تقوم بذلك
          على مسؤوليتك الخاصة.
          <br />
          <br />
          التغييرات على هذه السياسة
          <br />
          <br />
          قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. إذا قمنا بإجراء تغييرات
          ، فسنقوم بنشر السياسة المحدثة على موقعنا وتحديث تاريخ السريان في الجزء
          العلوي من هذه الصفحة. من خلال الاستمرار في استخدام موقعنا على شبكة
          الإنترنت بعد إجراء التغييرات ، فإنك توافق على السياسة المعدلة.
          <br />
          <br />
          اتصل بنا
          <br />
          <br />
          إذا كانت لديك أية أسئلة أو مخاوف بشأن سياسة الخصوصية الخاصة بنا ،
          فيرجى الاتصال بنا على
          <button
            className="drop-down-button"
            onClick={() => (window.location = "mailto:info@darmeseq.com")}
          >
            info@darmeseq.com
          </button>
        </p>
      )}
    </div>
  );
}

export default PrivacyPolicy;
