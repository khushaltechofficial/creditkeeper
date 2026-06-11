# Credit Keeper - Complete Business Credit Management App

## 🎉 New Features Implemented

### ✅ 1. Attach Bill Dialog
- **Image Selection**: Camera or Gallery options
- **Bill Date Picker**: Select date for the bill
- **Note Field**: Optional description for the bill  
- **Upload Functionality**: Ready for Supabase Storage integration

### ✅ 2. PDF Export
- **Full Transaction Report**: Export customer transactions as PDF
- **Professional Layout**: Clean, formatted PDF with customer info, transactions table, and summary
- **Print/Share Options**: Built-in print dialog or share via apps

### ✅ 3. Gemini AI Assistant
- **Smart Chat Interface**: Powered by Google Gemini AI
- **Helpful Guidance**: Answers questions about the app and credit management
- **Quick Suggestions**: Pre-populated questions for easy interaction
- **Welcome Message**: Greets users when they open the assistant

### ✅ 4. Enhanced Settings Screen
- **Account Section**: Logout with proper styling
- **Dark Mode Toggle**: Ready for theme integration
- **Notifications**: Enable/disable with reminder time picker
- **App Lock**: Toggle for PIN/biometric security
- **Support Section**: About, Help, Privacy, Terms

---

## 🚀 Setup Instructions

### 1. Install Flutter Dependencies

```bash
flutter pub get
```

### 2. Supabase Setup

The app uses **real-time data from Supabase**. No mock data needed!

1. Login to your Supabase dashboard
2. Make sure your `customers` and `transactions` tables are set up
3. Start using the app - all data will be stored in real-time
4. Add customers and transactions directly from the app

### 3. Run the App

#### Web (Chrome):
```bash
flutter run -d chrome
```

#### Android APK:
```bash
flutter build apk --release
```
The APK will be at: `build\app\outputs\flutter-apk\app-release.apk`

---

## 📱 Features Overview

### Dashboard
- **Switch View**: Toggle between Customers and Suppliers
- **Search Bar**: Real-time search by name or mobile number
- **Filter Button**: Ready for advanced filtering
- **AI Assistant Button**: Quick access to Gemini AI helper (robot icon)
- **Bottom Navigation**: Dashboard, Ledger, Settings, Suppliers

### Customer Detail Screen
- **Peach Header**: Shows customer info with person/edit icons
- **Profile Dialog**: Tap header to see detailed customer profile
- **Edit Dialog**: Update customer name and mobile number
- **Transaction Cards**: Styled cards with dates, amounts, and details
- **Given/Received Buttons**: Add transactions easily
- **Attach Bill Button**: Upload bill images with dates and notes
- **Export PDF Button**: Generate professional PDF reports

### AI Assistant
- **Smart Responses**: Powered by Google Gemini
- **Quick Suggestions**: Common questions ready to tap
- **Chat History**: View all your conversations
- **Helpful Guidance**: Learn app features and best practices

### Settings Screen
- **Profile**: Edit your profile details
- **Dark Mode**: Toggle dark/light theme
- **Notifications**: Enable reminders with custom time
- **App Lock**: PIN/biometric security
- **About**: App information and version
- **Logout**: Sign out with one tap

---

## 🔑 API Keys Configuration

### Gemini AI
Already configured with your API key:
```
AIzaSyDCN7rJHonir8FPZXeMNI0XjxJYNbVBl3M
```

### Supabase
Already configured in `lib/services/supabase_service.dart`:
```
URL: https://pxgpxerihdaumjvfobct.supabase.co
```

---

## 📊 Real-Time Data

All data is stored in **Supabase in real-time**:

### Customers:
- Add customers with name and mobile number
- Track their balance (Due/Advance)
- View transaction history
- Edit customer details anytime

### Transactions:
- Record credit given to customers
- Record payments received
- Add notes and descriptions
- Choose payment method (Cash, UPI, Bank Transfer, etc.)
- All data syncs instantly with Supabase

---

## 🎨 UI/UX Highlights

### Color Scheme:
- **Primary Blue**: #2196F3
- **Orange/Peach**: For customer headers (#FFE4D6)
- **Red**: For credit given/due amounts
- **Green**: For payments received/cleared
- **Purple**: For premium features (PDF, AI)

### Design Elements:
- **Rounded Corners**: 8-16px throughout
- **Card Elevation**: Subtle shadows for depth
- **Icon Consistency**: Material Design icons
- **Typography**: Clear hierarchy with bold headers
- **Spacing**: Generous padding for touch targets

---

## 📝 How to Use

### Adding a Customer:
1. Tap the blue **+** button on dashboard
2. Enter name and mobile number (optional)
3. Tap **Add**

### Recording a Transaction:
1. Tap a customer card to open details
2. Tap **Given** (red) or **Received** (green)
3. Enter amount, description, and date
4. Tap **Add**

### Attaching a Bill:
1. Open customer detail screen
2. Tap **Attach Bill** button
3. Choose Camera or Gallery
4. Select bill date and add note
5. Tap **Upload**

### Exporting PDF:
1. Open customer detail screen
2. Tap **Export PDF** button
3. View/print/share the generated PDF

### Using AI Assistant:
1. Tap the robot icon (🤖) in dashboard header
2. Ask any question about the app
3. Or tap a quick suggestion
4. Get instant help from Gemini AI

---

## 🔧 Troubleshooting

### Data Not Showing:
1. Make sure you're logged in with a valid Supabase account
2. Check your internet connection
3. Verify Supabase tables are set up correctly
4. Try logging out and logging in again

### PDF Not Generating:
- On web: PDF will open in browser print dialog
- On Android: PDF will open share dialog
- Make sure you have transactions to export

### AI Assistant Not Responding:
- Check your internet connection
- Verify Gemini API key is valid
- API has rate limits - wait a few seconds and try again

---

## 📁 Project Structure

```
lib/
├── models/
│   ├── customer_model.dart
│   └── transaction_model.dart
├── presentation/
│   ├── ai_assistant_screen/
│   │   └── ai_assistant_screen.dart
│   ├── authentication_screen/
│   ├── customer_detail_screen/
│   │   └── customer_detail_screen.dart
│   ├── dashboard_screen/
│   │   └── dashboard_screen.dart
│   ├── settings_screen/
│   │   └── settings_screen.dart
│   └── splash_screen/
├── services/
│   ├── gemini_service.dart
│   ├── pdf_service.dart
│   └── supabase_service.dart
├── theme/
│   └── app_theme.dart
├── widgets/
│   ├── attach_bill_dialog.dart
│   └── custom_error_widget.dart
└── main.dart
```

---

## 🚀 All Features Summary

✅ Customer Profile Dialog with avatar and stats
✅ Edit Customer Dialog
✅ Enhanced Transaction Cards with styling
✅ Attach Bill Dialog with image selection
✅ PDF Export with professional formatting
✅ Gemini AI Assistant with chat interface
✅ Enhanced Settings Screen with sections
✅ Search and Filter functionality
✅ Bottom Navigation (4 tabs)
✅ Switch View (Customers/Suppliers)
✅ Real-time data from Supabase
✅ Given/Received transaction buttons
✅ Peach-colored customer detail header

---

## 📄 Files Created/Modified

### Created:
- `lib/services/gemini_service.dart` - AI Assistant service
- `lib/services/pdf_service.dart` - PDF generation
- `lib/presentation/ai_assistant_screen/ai_assistant_screen.dart` - Chat UI
- `lib/widgets/attach_bill_dialog.dart` - Bill upload dialog

### Modified:
- `lib/presentation/customer_detail_screen/customer_detail_screen.dart` - Added all dialogs and features
- `lib/presentation/dashboard_screen/dashboard_screen.dart` - Added search, switch view, AI button
- `lib/presentation/settings_screen/settings_screen.dart` - Added Account section

---

**Built with ❤️ using Flutter & Powered by Gemini AI**
