import { type Teacher, type InsertTeacher, type Student, type InsertStudent, type DailyRecord, type InsertDailyRecord, type QuranError, type InsertQuranError } from "@shared/schema";
import { SupabaseStorage } from "./supabase-storage";

export interface IStorage {
  // Teachers
  getTeacher(id: string): Promise<Teacher | undefined>;
  getTeacherByUsername(username: string): Promise<Teacher | undefined>;
  getAllTeachers(): Promise<Teacher[]>;
  createTeacher(teacher: InsertTeacher): Promise<Teacher>;
  
  // Students
  getStudent(id: string): Promise<Student | undefined>;
  getAllStudents(): Promise<Student[]>;
  getStudentsByTeacher(teacherId: string): Promise<Student[]>;
  createStudent(student: InsertStudent): Promise<Student>;
  updateStudent(id: string, student: Partial<InsertStudent>): Promise<Student | undefined>;
  deleteStudent(id: string): Promise<boolean>;
  
  // Daily Records
  getDailyRecord(id: string): Promise<DailyRecord | undefined>;
  getDailyRecordsByStudent(studentId: string): Promise<DailyRecord[]>;
  getDailyRecordsByTeacher(teacherId: string): Promise<DailyRecord[]>;
  createDailyRecord(record: InsertDailyRecord): Promise<DailyRecord>;
  updateDailyRecord(id: string, record: Partial<InsertDailyRecord>): Promise<DailyRecord | undefined>;
  deleteDailyRecord(id: string): Promise<boolean>;
  
  // Quran Errors
  getQuranErrorsByStudent(studentId: string): Promise<QuranError[]>;
  createQuranError(error: InsertQuranError): Promise<QuranError>;
  deleteQuranError(id: string): Promise<boolean>;
  
  // Authentication
  validateTeacher(username: string, password: string): Promise<Teacher | null>;
}

// استخدام Supabase فقط كقاعدة البيانات الأساسية
export const storage = new SupabaseStorage();
console.log("✅ النظام يعتمد على Supabase بالكامل");