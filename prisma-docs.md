# Prisma Schema Documentation

## User

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| userId | String | No | Yes | Yes |
| role | UserRole | No | Yes | No |
| password | String | No | Yes | No |
| needsPasswordChange | Boolean | No | Yes | No |
| passwordResetToken | String | No | Yes | No |
| passwordResetTokenExpires | DateTime | No | Yes | No |
| status | UserStatus | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | admin | No | Yes | No |
| student | Student | No | Yes | No |
| faculty | Faculty | No | Yes | No |

## Admin

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| userId | String | No | Yes | Yes |
| user | User | No | Yes | No |
| firstName | String | No | Yes | No |
| lastName | String | No | Yes | No |
| middleName | String | No | Yes | No |
| dateOfBirth | String | No | Yes | No |
| gender | Gender | No | Yes | No |
| bloodGroup | BloodGroup | No | Yes | No |
| email | String | No | Yes | Yes |
| contactNo | String | No | Yes | No |
| emergencyContactNo | String | No | Yes | No |
| presentAddress | String | No | Yes | No |
| permanentAddress | String | No | Yes | No |
| designation | String | No | Yes | No |
| profileImage | String | No | Yes | No |
| isDeleted | Boolean | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |

## Student

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| userId | String | No | Yes | Yes |
| user | User | No | Yes | No |
| firstName | String | No | Yes | No |
| lastName | String | No | Yes | No |
| middleName | String | No | Yes | No |
| profileImage | String | No | Yes | No |
| email | String | No | Yes | Yes |
| contactNo | String | No | Yes | No |
| emergencyContactNo | String | No | Yes | No |
| gender | Gender | No | Yes | No |
| bloodGroup | BloodGroup | No | Yes | No |
| dateOfBirth | String | No | Yes | No |
| presentAddress | String | No | Yes | No |
| permanentAddress | String | No | Yes | No |
| fatherName | String | No | Yes | No |
| fatherOccupation | String | No | Yes | No |
| fatherContactNo | String | No | Yes | No |
| motherName | String | No | Yes | No |
| motherOccupation | String | No | Yes | No |
| motherContactNo | String | No | Yes | No |
| localGuardianName | String | No | Yes | No |
| localGuardianOccupation | String | No | Yes | No |
| localGuardianContactNo | String | No | Yes | No |
| localGuardianAddress | String | No | Yes | No |
| isDeleted | Boolean | No | Yes | No |
| academicSemesterId | String | No | Yes | No |
| academicSemester | AcademicSemester | No | Yes | No |
| academicDepartmentId | String | No | Yes | No |
| academicDepartment | AcademicDepartment | No | Yes | No |
| academicFacultyId | String | No | Yes | No |
| academicFaculty | AcademicFaculty | No | Yes | No |
| studentSemesterRegistrations | StudentSemesterRegistration | Yes | Yes | No |
| studentSemesterRegistrationCourses | StudentSemesterRegistrationCourse | Yes | Yes | No |
| studentEnrolledCourses | StudentEnrolledCourse | Yes | Yes | No |
| studentEnrolledCourseMarks | StudentEnrolledCourseMark | Yes | Yes | No |
| studentSemesterPayments | StudentSemesterPayment | Yes | Yes | No |
| studentAcademicInfos | StudentAcademicInfo | Yes | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |

## Faculty

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| userId | String | No | Yes | Yes |
| user | User | No | Yes | No |
| firstName | String | No | Yes | No |
| lastName | String | No | Yes | No |
| middleName | String | No | Yes | No |
| profileImage | String | No | Yes | No |
| email | String | No | Yes | No |
| contactNo | String | No | Yes | No |
| emergencyContactNo | String | No | Yes | No |
| dateOfBirth | String | No | Yes | No |
| gender | Gender | No | Yes | No |
| bloodGroup | BloodGroup | No | Yes | No |
| designation | String | No | Yes | No |
| presentAddress | String | No | Yes | No |
| permanentAddress | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | academicDepartment | No | Yes | No |
| academicDepartmentId | String | No | Yes | No |
| academicFaculty | AcademicFaculty | No | Yes | No |
| academicFacultyId | String | No | Yes | No |
| courses | CourseFaculty | Yes | Yes | No |
| offeredCourseClassSchedules | OfferedCourseClassSchedule | Yes | Yes | No |

## AcademicSemester

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| title | String | No | Yes | No |
| code | String | No | Yes | No |
| year | Int | No | Yes | No |
| startMonth | String | No | Yes | No |
| endMonth | String | No | Yes | No |
| isCurrent | Boolean | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | students | No | Yes | No |
| semesterRegistrations | SemesterRegistration | Yes | Yes | No |
| studentEnrolledCourses | StudentEnrolledCourse | Yes | Yes | No |
| studentEnrolledCourseMarks | StudentEnrolledCourseMark | Yes | Yes | No |
| studentSemesterPayments | StudentSemesterPayment | Yes | Yes | No |

## AcademicFaculty

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| title | String | No | Yes | Yes |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | academicDepartments | No | Yes | No |
| students | Student | Yes | Yes | No |
| faculties | Faculty | Yes | Yes | No |

## AcademicDepartment

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| title | String | No | Yes | Yes |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | academicFaculty | No | Yes | No |
| academicFacultyId | String | No | Yes | No |
| students | Student | Yes | Yes | No |
| faculties | Faculty | Yes | Yes | No |
| offeredCourses | OfferedCourse | Yes | Yes | No |

## Course

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| title | String | No | Yes | No |
| code | String | No | Yes | No |
| credits | Int | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | prerequisites | No | Yes | No |
| prerequisiteFor | CourseToPrerequisite | Yes | Yes | No |
| faculties | CourseFaculty | Yes | Yes | No |
| offeredCourses | OfferedCourse | Yes | Yes | No |
| studentEnrolledCourses | StudentEnrolledCourse | Yes | Yes | No |

## CourseToPrerequisite

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| courseId | String | No | Yes | No |
| prerequisiteId | String | No | Yes | No |
| course | Course | No | Yes | No |
| prerequisite | Course | No | Yes | No |

## Building

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| title | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | rooms | No | Yes | No |

## Room

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| roomNumber | String | No | Yes | No |
| floor | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | building | No | Yes | No |
| buildingId | String | No | Yes | No |
| offeredCourseClassSchedules | OfferedCourseClassSchedule | Yes | Yes | No |

## CourseFaculty

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| course | Course | No | Yes | No |
| courseId | String | No | Yes | No |
| faculty | Faculty | No | Yes | No |
| facultyId | String | No | Yes | No |

## SemesterRegistration

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| startDate | DateTime | No | Yes | No |
| endDate | DateTime | No | Yes | No |
| status | SemesterRegistrationStatus | No | Yes | No |
| minCredit | Int | No | Yes | No |
| maxCredit | Int | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | academicSemester | No | Yes | No |
| academicSemesterId | String | No | Yes | No |
| offeredCourses | OfferedCourse | Yes | Yes | No |
| studentSemesterRegistrations | StudentSemesterRegistration | Yes | Yes | No |
| studentSemesterRegistrationCourses | StudentSemesterRegistrationCourse | Yes | Yes | No |
| offeredCourseSections | OfferedCourseSection | Yes | Yes | No |
| offeredCourseClassSchedules | OfferedCourseClassSchedule | Yes | Yes | No |

## OfferedCourse

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | course | No | Yes | No |
| courseId | String | No | Yes | No |
| semesterRegistration | SemesterRegistration | No | Yes | No |
| semesterRegistrationId | String | No | Yes | No |
| academicDepartment | AcademicDepartment | No | Yes | No |
| academicDepartmentId | String | No | Yes | No |
| offeredCourseSections | OfferedCourseSection | Yes | Yes | No |
| studentSemesterRegistrationCourses | StudentSemesterRegistrationCourse | Yes | Yes | No |

## OfferedCourseSection

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| title | String | No | Yes | No |
| maxCapacity | Int | No | Yes | No |
| currentlyEnrolledStudent | Int | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | offeredCourse | No | Yes | No |
| offeredCourseId | String | No | Yes | No |
| semesterRegistration | SemesterRegistration | No | Yes | No |
| semesterRegistrationId | String | No | Yes | No |
| offeredCourseClassSchedules | OfferedCourseClassSchedule | Yes | Yes | No |
| studentSemesterRegistrationCourses | StudentSemesterRegistrationCourse | Yes | Yes | No |

## OfferedCourseClassSchedule

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| dayOfWeek | WeekDays | No | Yes | No |
| startTime | String | No | Yes | No |
| endTime | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | offeredCourseSection | No | Yes | No |
| offeredCourseSectionId | String | No | Yes | No |
| semesterRegistration | SemesterRegistration | No | Yes | No |
| semesterRegistrationId | String | No | Yes | No |
| room | Room | No | Yes | No |
| roomId | String | No | Yes | No |
| faculty | Faculty | No | Yes | No |
| facultyId | String | No | Yes | No |

## StudentSemesterRegistration

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| isConfirmed | Boolean | No | Yes | No |
| totalCreditsTaken | Int | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | semesterRegistration | No | Yes | No |
| semesterRegistrationId | String | No | Yes | No |
| student | Student | No | Yes | No |
| studentId | String | No | Yes | No |

## StudentSemesterRegistrationCourse

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | semesterRegistration | No | Yes | No |
| semesterRegistrationId | String | No | Yes | No |
| student | Student | No | Yes | No |
| studentId | String | No | Yes | No |
| offeredCourse | OfferedCourse | No | Yes | No |
| offeredCourseId | String | No | Yes | No |
| offeredCourseSection | OfferedCourseSection | No | Yes | No |
| offeredCourseSectionId | String | No | Yes | No |

## StudentEnrolledCourse

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | student | No | Yes | No |
| studentId | String | No | Yes | No |
| course | Course | No | Yes | No |
| courseId | String | No | Yes | No |
| academicSemester | AcademicSemester | No | Yes | No |
| academicSemesterId | String | No | Yes | No |
| grade | String | No | Yes | No |
| point | Float | No | Yes | No |
| totalMarks | Int | No | Yes | No |
| status | StudentEnrolledCourseStatus | No | Yes | No |
| studentEnrolledCourseMarks | StudentEnrolledCourseMark | Yes | Yes | No |

## StudentEnrolledCourseMark

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | student | No | Yes | No |
| studentId | String | No | Yes | No |
| studentEnrolledCourse | StudentEnrolledCourse | No | Yes | No |
| studentEnrolledCourseId | String | No | Yes | No |
| academicSemester | AcademicSemester | No | Yes | No |
| academicSemesterId | String | No | Yes | No |
| grade | String | No | Yes | No |
| marks | Int | No | Yes | No |
| examType | ExamType | No | Yes | No |

## StudentSemesterPayment

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | student | No | Yes | No |
| studentId | String | No | Yes | No |
| academicSemester | AcademicSemester | No | Yes | No |
| academicSemesterId | String | No | Yes | No |
| fullPaymentAmount | Int | No | Yes | No |
| partialPaymentAmount | Int | No | Yes | No |
| totalPaidAmount | Int | No | Yes | No |
| totalDueAmount | Int | No | Yes | No |
| paymentStatus | PaymentStatus | No | Yes | No |
| paymentHistories | StudentSemesterPaymentHistory | Yes | Yes | No |

## StudentSemesterPaymentHistory

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | studentSemesterPayment | No | Yes | No |
| studentSemesterPaymentId | String | No | Yes | No |
| transactionId | String | No | Yes | Yes |
| dueAmount | Int | No | Yes | No |
| paidAmount | Int | No | Yes | No |
| paymentMethod | PaymentMethod | No | Yes | No |
| isPaid | Boolean | No | Yes | No |

## StudentAcademicInfo

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | String | No | Yes | No |
| createdAt | DateTime | No | Yes | No |
| updatedAt | DateTime | No | Yes | No |
| updatedAt | student | No | Yes | No |
| studentId | String | No | Yes | No |
| totalCompletedCredit | Int | No | Yes | No |
| cgpa | Float | No | Yes | No |

## Enums

### UserRole

---
SUPER_ADMIN, ADMIN, STUDENT, FACULTY

### Gender

---
MALE, FEMALE, OTHERS

### UserStatus

---
ACTIVE, INACTIVE, DELETED

### BloodGroup

---
A_POSITIVE, A_NEGATIVE, B_POSITIVE, B_NEGATIVE, AB_POSITIVE, AB_NEGATIVE, O_POSITIVE, O_NEGATIVE

### SemesterRegistrationStatus

---
UPCOMING, ONGOING, ENDED

### StudentEnrolledCourseStatus

---
ONGOING, COMPLETED, WITHDRAWN, FAILED

### WeekDays

---
SATURDAY, SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY

### ExamType

---
MIDTERM, FINAL

### PaymentStatus

---
PENDING, PARTIAL_PAID, FULL_PAID

### PaymentMethod

---
CASH, ONLINE

