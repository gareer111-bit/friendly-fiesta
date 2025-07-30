import { storage } from "./storage";

// تهيئة المعلمين الأساسيين
export async function initializeTeachers() {
  try {
    console.log("🚀 بدء تهيئة المعلمين الأساسيين في Supabase...");
    
    // Check current teachers count first
    const existingTeachers = await storage.getAllTeachers();
    console.log(`📊 المعلمين الموجودين حالياً: ${existingTeachers.length}`);
    
    // إذا كان هناك معلمين موجودين، لا نحتاج لإضافة المزيد  
    if (existingTeachers.length >= 13) {
      console.log("✅ جميع المعلمين موجودين مسبقاً في Supabase");
      console.log(`👨‍🏫 معلمين الرجال: ${existingTeachers.filter(t => t.gender === 'male').length}`);
      console.log(`👩‍🏫 معلمات النساء: ${existingTeachers.filter(t => t.gender === 'female').length}`);
      return;
    }
    
    // المعلمين للحلقات الرجالية
    const menTeachers = [
      { username: "abdalrazaq", password: "123456", name: "أ. عبدالرزاق", gender: "male", circleName: "حلقة عبدالرزاق" },
      { username: "ibrahim", password: "123456", name: "أ. إبراهيم كدوائي", gender: "male", circleName: "حلقة إبراهيم كدوائي" },
      { username: "hassan", password: "123456", name: "أ. حسن", gender: "male", circleName: "حلقة حسن" },
      { username: "saud", password: "123456", name: "أ. سعود", gender: "male", circleName: "حلقة سعود" },
      { username: "saleh", password: "123456", name: "أ. صالح", gender: "male", circleName: "حلقة صالح" },
      { username: "abdullah", password: "123456", name: "أ. عبدالله", gender: "male", circleName: "حلقة عبدالله" },
      { username: "nabil", password: "123456", name: "أ. نبيل", gender: "male", circleName: "حلقة نبيل" },
    ];

    // المعلمات للحلقات النسائية
    const womenTeachers = [
      { username: "asma", password: "123456", name: "أ. أسماء", gender: "female", circleName: "حلقة أسماء" },
      { username: "raghad", password: "123456", name: "أ. رغد", gender: "female", circleName: "حلقة رغد" },
      { username: "madina", password: "123456", name: "أ. مدينة", gender: "female", circleName: "حلقة مدينة" },
      { username: "nashwa", password: "123456", name: "أ. نشوة", gender: "female", circleName: "حلقة نشوة" },
      { username: "nour", password: "123456", name: "أ. نور", gender: "female", circleName: "حلقة نور" },
      { username: "hind", password: "123456", name: "أ. هند", gender: "female", circleName: "حلقة هند" },
    ];

    const allTeachers = [...menTeachers, ...womenTeachers];
    let addedCount = 0;
    
    for (const teacherData of allTeachers) {
      try {
        // التحقق من وجود المعلم
        const existingTeacher = await storage.getTeacherByUsername(teacherData.username);
        if (!existingTeacher) {
          await storage.createTeacher(teacherData as any);
          addedCount++;
          console.log(`➕ تم إضافة المعلم: ${teacherData.name}`);
        } else {
          console.log(`✅ المعلم موجود: ${teacherData.name}`);
        }
      } catch (error) {
        console.error(`❌ فشل في إضافة المعلم ${teacherData.name}:`, error);
      }
    }
    
    console.log(`🎉 تم إضافة ${addedCount} معلم جديد من أصل ${allTeachers.length}`);
    
    // التحقق من العدد النهائي
    const finalTeachers = await storage.getAllTeachers();
    console.log(`📊 العدد النهائي للمعلمين: ${finalTeachers.length}`);
    console.log(`👨‍🏫 معلمين الرجال: ${finalTeachers.filter(t => t.gender === 'male').length}`);
    console.log(`👩‍🏫 معلمات النساء: ${finalTeachers.filter(t => t.gender === 'female').length}`);
    console.log("✅ جميع البيانات محفوظة في Supabase بشكل دائم!");
    
  } catch (error) {
    console.error("❌ خطأ في تهيئة المعلمين:", error);
    console.log("🔄 تأكد من اتصال Supabase وحاول مرة أخرى");
  }
}