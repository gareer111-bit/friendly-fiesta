# 🚀 دليل سريع: ربط النظام بـ Supabase

## الخطوات (5 دقائق فقط!):

### 1️⃣ إنشاء مشروع Supabase
- اذهب إلى: https://supabase.com/dashboard/projects
- اضغط **"New Project"**
- اسم المشروع: `quran-circles`
- اختر كلمة مرور قوية واحفظها
- انتظر انتهاء الإعداد (دقيقتين)

### 2️⃣ نسخ رابط قاعدة البيانات
- اضغط **"Connect"** في الشريط العلوي
- اختر **"Connection string"**
- اختر **"Transaction pooler"** 
- انسخ الرابط وعدّل `[YOUR-PASSWORD]` بكلمة المرور

### 3️⃣ إضافة الرابط في Replit
- في Replit، اذهب لـ **"Secrets"** (في القائمة الجانبية)
- أضف secret جديد:
  - **Key:** `DATABASE_URL`
  - **Value:** الرابط من Supabase

### 4️⃣ إعداد قاعدة البيانات
```bash
npm run db:push
tsx scripts/setup-supabase.ts
```

## ✅ انتهيت!
النظام الآن متصل بـ Supabase وجاهز للاستخدام بجميع بيانات المعلمين!

---

## 🔄 لاستخدام قاعدة البيانات المحلية مرة أخرى:
ببساطة احذف `DATABASE_URL` من Secrets وسيعود النظام لقاعدة البيانات المحلية.

## 📞 مساعدة؟
إذا واجهتك مشكلة، تأكد من:
1. صحة كلمة المرور في الرابط
2. أن مشروع Supabase نشط
3. أن `DATABASE_URL` مُضاف بشكل صحيح في Secrets