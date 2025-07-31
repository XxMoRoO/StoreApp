// --- حالة التطبيق (State) ---
// هذا الكائن يحتوي على جميع البيانات التي يحتاجها التطبيق ليعمل
const state = {
    currentPage: 'home-page',
    products: [],
    receipts: [],
    bookings: [],
    salaries: {},
    bookingSearchTerm: '',
    salariesSearchTerm: '',
    activeBookingId: null,
    activeReceiptId: null,
    editingBookingId: null,
    sales: [],
    users: [],
    customers: [],
    lang: 'en',
    editingProductId: null,
    returningSaleId: null,
    selectedSales: new Set(),
    currentUser: null,
    isAdminMode: false,
    categories: ['All'],
    activeCategory: 'All',
    itemToAdd: null,
    lastShiftReportTime: null,
};

// --- بيانات الترجمة ---
// يحتوي على جميع النصوص للغتين العربية والإنجليزية
const translations = {
    en: {
        navHome: 'Home', navInventory: 'Inventory', navSelling: 'Selling', navBooking: 'Booking', navHistory: 'History', navCustomers: 'Customers', navSalaries: 'Salaries', navAbout: 'About', btnLogout: 'Logout',
        searchPlaceholder: 'Search by name, code, or barcode...',
        inventorySearchPlaceholder: 'Search inventory...',
        addNewProduct: 'Add New Product',
        colProductName: 'Name', colProductCode: 'Code', colCategory: 'Category', colImage: 'Image', colQuantity: 'Quantity', colPurchasePrice: 'Purchase Price', colSellingPrice: 'Selling Price', colColors: 'Colors', colActions: 'Actions',
        modalAddTitle: 'Add New Product', modalEditTitle: 'Edit Product',
        labelProductName: 'Product Name', labelCategory: 'Category', labelProductCode: 'Product Code (SKU)', labelBarcode: 'Main Barcode', labelProductImages: 'Product Images',
        labelColors: 'Colors & Stock', btnAddColor: '+ Add Color', labelColorName: 'Color',
        labelSizesForColor: 'Sizes for', labelSize: 'Size', labelQuantity: 'Quantity', btnAddSize: '+ Add Size',
        btnSave: 'Save Product', btnCancel: 'Cancel', btnOK: 'OK', btnEdit: 'Edit', btnDelete: 'Delete',
        addToCartTitle: 'Add Products to Cart', selectProduct: 'Select a product', color: 'Color', size: 'Size', sellingPrice: 'Selling Price (EGP)', addToCart: 'Add to Cart',
        addedToCart: 'Added!',
        barcodeScanner: 'Scan Barcode', barcodePlaceholder: 'Scan or type and press Enter...',
        cart: 'Cart',
        customerPhone: 'Customer Phone', customerName: 'Customer Name', customerAddress: 'Customer Address', colCustomerCity: 'City',
        subtotal: 'Subtotal:', discountPercent: 'Discount (%):', discountAmount: 'Discount (EGP):', total: 'Total:', paidAmount: 'Paid Amount (EGP)', paidAmountPlaceholder: 'Enter amount paid', completeSale: 'Complete Sale',
        paymentMethod: 'Payment Method', cash: 'Cash', instaPay: 'InstaPay', vCash: 'VCash',
        freeDelivery: 'Free Delivery', deliveryFee: 'Delivery Fee',
        deposit: 'Deposit (EGP)', saveBooking: 'Save Booking', openBookings: 'Open Bookings', loadBooking: 'Load Booking', bookingSaved: 'Booking saved!',
        reports: 'Reports', timeFilter: 'Time Filter', allTime: 'All Time', byMonth: 'By Month', byDay: 'By Day', selectMonth: 'Select Month', selectDay: 'Select Day', cashier: 'Cashier', allUsers: 'All Users', exportPdf: 'Export to PDF',
        totalRevenue: 'Total Revenue', totalProfit: 'Total Profit', totalItemsSold: 'Total Items Sold', totalReturns: 'Total Returns', totalReturnsValue: 'Total Returns Value',
        totalCashSales: 'Total Cash Sales', totalCardSales: 'Total Card Sales',
        salesHistory: 'Sales History', searchReceiptsPlaceholder: 'Search by Receipt ID, Customer, or Cashier...',
        selectAll: 'Select All', deleteSelected: 'Delete Selected',
        userManagement: 'User Management', openUserManagement: 'Open User Management',
        btnReturn: 'Return', btnReturned: 'Returned', btnPrint: 'Print', btnBarcode: 'Barcodes',
        outOfStock: 'Out of Stock',
        manageCategories: 'Manage Categories', manageCategoriesTitle: 'Manage Categories',
        newCategoryName: 'New Category Name', addCategoryBtn: 'Add',
        existingCategories: 'Existing Categories', doneBtn: 'Done',
        categoryDeleteConfirm: 'Are you sure you want to delete this category? All products in this category will become uncategorized.',
        customersTitle: 'Customers',
        colCustomerName: 'Name', colCustomerPhone: 'Phone', colCustomerAddress: 'Address', colTotalItems: 'Total Items Bought', colLastPurchase: 'Last Purchase',
        filterByMonth: 'Filter by Month:', exportExcel: 'Export to Excel',
        sellerSummaryTitle: 'Seller Summary',
        processing: 'Processing...',
        exportInventory: 'Export Inventory Report',
        inventoryReportTitle: 'Inventory Report',
        colSoldThisMonth: 'Sold (Month)',
        colTotalSalesMonth: 'Total Sales (Month)',
        navAdminMode: 'Admin',
        calculateShift: 'Calculate Shift',
        shiftReportTitle: 'Shift Report',
        saveAsBooking: 'Save as Booking',
        confirmBookingTitle: 'Confirm Booking',
        confirmBookingMsg: 'Please enter the deposit amount to save this cart as a booking.',
        amountDue: 'Amount Due:',
        bookingDetails: 'Booking Details',
        printBooking: 'Print Booking',
        bookingInvoice: 'Booking Invoice',
        bookingSearchPlaceholder: 'Search by ID, name, or phone...',
        colUserName: 'User Name', colFixedSalary: 'Fixed Salary', colCommissionPerPiece: 'Commission / Piece', colPiecesSold: 'Pieces Sold', colTotalCommission: 'Total Commission', colTotalSalary: 'Total Salary',
        editBooking: 'Edit Booking',
        depositPaid: 'Deposit Paid:',
        amountRemaining: 'Amount Remaining:',
        totalInstaPaySales: 'Total InstaPay Sales',
        totalVCashSales: 'Total VCash Sales',
        totalFreeDeliveries: 'Total Free Deliveries',
        colBonus: 'Bonus',
        depositPaymentMethod: 'Deposit Method:',
        exportReturns: 'Export Returns Report',
        returnDate: 'Return Date:',
        originalSaleTotal: 'Original Sale Total:',
        netSaleAfterReturn: 'Net Sale After Return:',
    },
    ar: {
        navHome: 'الرئيسية', navInventory: 'المخزن', navSelling: 'البيع', navBooking: 'الحجز', navHistory: 'السجلات', navCustomers: 'العملاء', navSalaries: 'الرواتب', navAbout: 'حول', btnLogout: 'تسجيل الخروج',
        searchPlaceholder: 'البحث بالاسم أو الكود أو الباركود...',
        inventorySearchPlaceholder: 'البحث في المخزن...',
        addNewProduct: 'إضافة منتج جديد',
        colProductName: 'الاسم', colProductCode: 'الكود', colCategory: 'الفئة', colImage: 'صورة', colQuantity: 'الكمية', colPurchasePrice: 'سعر الشراء', colSellingPrice: 'سعر البيع', colColors: 'الألوان', colActions: 'إجراءات',
        modalAddTitle: 'إضافة منتج جديد', modalEditTitle: 'تعديل المنتج',
        labelProductName: 'اسم المنتج', labelCategory: 'الفئة', labelProductCode: 'كود المنتج (SKU)', labelBarcode: 'الباركود الرئيسي', labelProductImages: 'صور المنتج',
        labelColors: 'الألوان والمخزون', btnAddColor: '+ إضافة لون', labelColorName: 'اللون',
        labelSizesForColor: 'مقاسات لون', labelSize: 'مقاس', labelQuantity: 'كمية', btnAddSize: '+ إضافة مقاس',
        btnSave: 'حفظ المنتج', btnCancel: 'إلغاء', btnOK: 'موافق', btnEdit: 'تعديل', btnDelete: 'حذف',
        addToCartTitle: 'إضافة منتجات للسلة', selectProduct: 'اختر منتج', color: 'اللون', size: 'المقاس', sellingPrice: 'سعر البيع (جنيه)', addToCart: 'أضف إلى السلة',
        addedToCart: 'تمت الإضافة!',
        barcodeScanner: 'مسح الباركود', barcodePlaceholder: 'امسح أو اكتب واضغط Enter...',
        cart: 'السلة',
        customerPhone: 'هاتف العميل', customerName: 'اسم العميل', customerAddress: 'عنوان العميل', colCustomerCity: 'المدينة',
        subtotal: 'المجموع الفرعي:', discountPercent: 'خصم (٪):', discountAmount: 'خصم (جنيه):', total: 'الإجمالي:', paidAmount: 'المبلغ المدفوع (جنيه)', paidAmountPlaceholder: 'أدخل المبلغ المدفوع', completeSale: 'إتمام البيع',
        paymentMethod: 'طريقة الدفع', cash: 'كاش', instaPay: 'InstaPay', vCash: 'VCash',
        freeDelivery: 'توصيل مجاني', deliveryFee: 'رسوم التوصيل',
        deposit: 'عربون (جنيه)', saveBooking: 'حفظ الحجز', openBookings: 'الحجوزات المفتوحة', loadBooking: 'تحميل الحجز', bookingSaved: 'تم حفظ الحجز!',
        reports: 'التقارير', timeFilter: 'تصفية بالوقت', allTime: 'كل الأوقات', byMonth: 'بالشهر', byDay: 'باليوم', selectMonth: 'اختر الشهر', selectDay: 'اختر اليوم', cashier: 'الكاشير', allUsers: 'كل المستخدمين', exportPdf: 'تصدير PDF',
        totalRevenue: 'إجمالي الإيرادات', totalProfit: 'إجمالي الأرباح', totalItemsSold: 'إجمالي القطع المباعة', totalReturns: 'إجمالي المرتجعات', totalReturnsValue: 'قيمة المرتجعات',
        totalCashSales: 'مبيعات الكاش', totalCardSales: 'مبيعات الكارت',
        totalInstaPaySales: 'مبيعات InstaPay',
        totalVCashSales: 'مبيعات VCash',
        salesHistory: 'سجل المبيعات', searchReceiptsPlaceholder: 'البحث برقم الإيصال، العميل، أو الكاشير...',
        selectAll: 'تحديد الكل', deleteSelected: 'حذف المحدد',
        userManagement: 'إدارة المستخدمين', openUserManagement: 'فتح إدارة المستخدمين',
        btnReturn: 'إرجاع', btnReturned: 'تم الإرجاع', btnPrint: 'طباعة', btnBarcode: 'الباركودات',
        outOfStock: 'نفذ المخزون',
        manageCategories: 'إدارة الفئات', manageCategoriesTitle: 'إدارة الفئات',
        newCategoryName: 'اسم الفئة الجديدة', addCategoryBtn: 'إضافة',
        existingCategories: 'الفئات الحالية', doneBtn: 'تم',
        categoryDeleteConfirm: 'هل أنت متأكد من حذف هذه الفئة؟ سيتم إلغاء تصنيف جميع المنتجات في هذه الفئة.',
        customersTitle: 'العملاء',
        colCustomerName: 'الاسم', colCustomerPhone: 'الهاتف', colCustomerAddress: 'العنوان', colTotalItems: 'إجمالي المشتريات', colLastPurchase: 'آخر شراء',
        filterByMonth: 'فلترة بالشهر:', exportExcel: 'تصدير لإكسل',
        sellerSummaryTitle: 'ملخص البائعين',
        processing: 'جاري المعالجة...',
        exportInventory: 'تصدير تقرير المخزون',
        inventoryReportTitle: 'تقرير المخزون',
        colSoldThisMonth: 'المباع (شهرياً)',
        colTotalSalesMonth: 'إجمالي المبيعات (شهرياً)',
        navAdminMode: 'المدير',
        calculateShift: 'حساب اليومية',
        shiftReportTitle: 'تقرير اليومية',
        saveAsBooking: 'حفظ كحجز',
        confirmBookingTitle: 'تأكيد الحجز',
        confirmBookingMsg: 'الرجاء إدخال قيمة العربون لحفظ هذه السلة كحجز.',
        amountDue: 'المبلغ المتبقي:',
        bookingDetails: 'تفاصيل الحجز',
        printBooking: 'طباعة الحجز',
        bookingInvoice: 'فاتورة حجز',
        bookingSearchPlaceholder: 'البحث بالرقم، الاسم، أو الهاتف...',
        colUserName: 'اسم المستخدم', colFixedSalary: 'الراتب الثابت', colCommissionPerPiece: 'العمولة للقطعة', colPiecesSold: 'القطع المباعة', colTotalCommission: 'إجمالي العمولة', colTotalSalary: 'الإجمالي المستحق',
        editBooking: 'تعديل الحجز',
        depositPaid: 'العربون المدفوع:',
        amountRemaining: 'المبلغ المتبقي:',
        totalFreeDeliveries: 'إجمالي التوصيلات المجانية',
        colBonus: 'المكافأة',
        depositPaymentMethod: 'طريقة دفع العربون:',
        exportReturns: 'تصدير تقرير المرتجعات',
        returnDate: 'تاريخ الإرجاع:',
        originalSaleTotal: 'إجمالي الطلب الأصلي:',
        netSaleAfterReturn: 'صافي البيع بعد الإرجاع:',
    }
};


// --- دوال مساعدة ---
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to generate a daily sequential ID for bookings and sales
function getDailyId(prefix, collection) {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const itemsToday = collection.filter(item => item.createdAt && item.createdAt.startsWith(today));
    const nextId = itemsToday.length + 1;
    return `${prefix}${today.replace(/-/g, '')}-${nextId}`;
}


function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = {
        info: 'bg-blue-500',
        success: 'bg-green-500',
        error: 'bg-red-500'
    };
    notification.className = `fixed bottom-5 right-5 text-white py-3 px-6 rounded-lg shadow-lg z-50 transform translate-y-24 opacity-0 transition-all duration-500 ease-in-out`;
    notification.classList.add(colors[type] || colors.info);
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.remove('translate-y-24', 'opacity-0');
    }, 10);

    setTimeout(() => {
        notification.classList.add('translate-y-24', 'opacity-0');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3500);
}

function getProductTotalQuantity(product) {
    if (!product || !product.colors || typeof product.colors !== 'object') return 0;
    let total = 0;
    for (const color of Object.values(product.colors)) {
        if (color.sizes && typeof color.sizes === 'object') {
            total += Object.values(color.sizes).reduce((sum, sizeData) => sum + (parseInt(sizeData.quantity, 10) || 0), 0);
        }
    }
    return total;
}

// --- حفظ البيانات ---
async function saveData() {
    const savedCategories = state.categories.filter(c => c !== 'All');
    const result = await window.api.saveData({
        products: state.products,
        sales: state.sales,
        categories: savedCategories,
        customers: state.customers,
        bookings: state.bookings,
        salaries: state.salaries,
    });
    if (!result.success) {
        console.error("Failed to save data:", result.error);
        showNotification("Error: Could not save data.", 'error');
    }
}

const cartSession = {
    save: () => sessionStorage.setItem('bags-receipts', JSON.stringify(state.receipts)),
    load: () => {
        const savedReceipts = sessionStorage.getItem('bags-receipts');
        if (savedReceipts) {
            try {
                state.receipts = JSON.parse(savedReceipts);
                state.receipts.forEach(receipt => {
                    if (!receipt.seller) {
                        receipt.seller = state.currentUser.username;
                    }
                });
                if (state.receipts.length === 0) {
                    createNewReceipt(false);
                }
                state.activeReceiptId = state.receipts[0]?.id || null;
            } catch (e) {
                console.error("Could not parse saved receipts:", e);
                state.receipts = [];
                createNewReceipt(false);
            }
        } else {
            createNewReceipt(false);
        }
    }
};

// --- دوال الطباعة ---
function printBarcode(barcodeValue, productName, color, size, price) {
    if (!barcodeValue) {
        console.warn('Attempted to print barcode for a product without one.');
        showNotification("This item does not have a barcode.", "error");
        return;
    }

    const labelText = `${productName} - ${color} / ${size} - ${price} EGP`;

    const printWindow = window.open('', 'PRINT', 'height=150,width=300');

    printWindow.document.write(`
        <html>
            <head>
                <title>Print Barcode</title>
                <style>
                    body { text-align: center; margin: 0; padding: 5px; font-family: Arial, sans-serif; width: 58mm; box-sizing: border-box; }
                    p { margin: 0; padding-bottom: 2px; font-size: 10px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%; }
                    svg { width: 100%; }
                    @page { size: 58mm 25mm; margin: 0; }
                </style>
            </head>
            <body>
                <p>${labelText}</p>
                <svg id="barcode"></svg>
                <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"><\/script>
                <script>
                    window.onload = function() {
                        try {
                            JsBarcode("#barcode", "${barcodeValue}", {
                                format: "CODE128", width: 1.5, height: 40, displayValue: true, fontSize: 12, textMargin: 0, margin: 5
                            });
                            window.print();
                        } catch (e) { console.error('JsBarcode Error:', e); }
                        setTimeout(() => window.close(), 500);
                    };
                <\/script>
            </body>
        </html>`);
    printWindow.document.close();
}


// --- دوال عرض وتحديث الواجهة الرسومية ---
function updateAdminUI() {
    document.body.classList.toggle('admin-mode', state.isAdminMode);
    if (!state.isAdminMode && (state.currentPage === 'inventory-page' || state.currentPage === 'history-page' || state.currentPage === 'customers-page' || state.currentPage === 'salaries-page')) {
        state.currentPage = 'home-page';
    }
}

function updateUIText() {
    const lang = state.lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (translations[lang]?.[key]) {
            if (el.placeholder !== undefined) {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    document.getElementById('lang-switcher-text').textContent = lang === 'en' ? 'EN' : 'AR';
}

function render() {
    updateAdminUI();

    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const currentPageElement = document.getElementById(state.currentPage);
    if (currentPageElement) {
        currentPageElement.classList.remove('hidden');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.id !== 'admin-mode-btn') {
            link.classList.toggle('active', link.dataset.page === state.currentPage);
        }
    });
    document.getElementById('admin-mode-btn').classList.toggle('active', state.isAdminMode);

    if (state.currentPage === 'home-page' || state.currentPage === 'inventory-page') {
        renderCategoryTabs();
    }
    if (state.currentPage === 'home-page') renderProductGallery();
    if (state.currentPage === 'inventory-page') renderInventoryTable();
    if (state.currentPage === 'selling-page') renderSellingPage();
    if (state.currentPage === 'booking-page') renderBookingPage();
    if (state.currentPage === 'history-page') renderSalesHistory();
    if (state.currentPage === 'customers-page') renderCustomersPage();
    if (state.currentPage === 'salaries-page') renderSalariesPage();

    updateUIText();
    updateCartIconCount(); // Ensure cart count is updated on every render
}

function renderCategoryTabs() {
    const homeTabs = document.getElementById('home-category-tabs');
    const invTabs = document.getElementById('inventory-category-tabs');
    if (!homeTabs || !invTabs) return;
    homeTabs.innerHTML = '';
    invTabs.innerHTML = '';
    state.categories.forEach(category => {
        const tab = document.createElement('div');
        tab.className = `category-tab ${state.activeCategory === category ? 'active' : ''}`;
        tab.textContent = category;
        tab.dataset.category = category;
        homeTabs.appendChild(tab.cloneNode(true));
        invTabs.appendChild(tab);
    });
}

function renderProductGallery() {
    const gallery = document.getElementById('product-gallery');
    const searchInput = document.getElementById('product-search');
    if (!gallery || !searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    gallery.innerHTML = '';
    let filtered = state.products;
    if (state.activeCategory !== 'All') {
        filtered = filtered.filter(p => p.category === state.activeCategory);
    }
    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            (p.code && p.code.toLowerCase().includes(searchTerm))
        );
    }
    if (filtered.length === 0) {
        gallery.innerHTML = `<p class="text-center col-span-full">No products found.</p>`;
        return;
    }
    filtered.forEach(p => {
        const totalQuantity = getProductTotalQuantity(p);
        const card = document.createElement('div');
        card.className = 'product-card rounded-lg p-4 flex flex-col [perspective:1000px]';
        const buttonText = totalQuantity === 0 ? translations[state.lang].outOfStock : translations[state.lang].addToCart;

        const availableColors = p.colors ? Object.keys(p.colors) : [];
        const colorSwatches = availableColors.map((c, index) =>
            `<button 
                class="color-swatch ${index === 0 ? 'active' : ''}" 
                data-color="${c}" 
                title="${c}" 
                style="background-color: ${c.toLowerCase().replace(/\s/g, '')}">
             </button>`
        ).join('');

        const firstColorName = availableColors.length > 0 ? availableColors[0] : null;
        const firstColorData = firstColorName ? p.colors[firstColorName] : { sizes: {} };

        const availableSizes = firstColorData.sizes ? Object.keys(firstColorData.sizes).filter(s => firstColorData.sizes[s].quantity > 0) : [];
        const sizeOptions = availableSizes.map(s => `<option value="${s}">${s}</option>`).join('');

        const firstImage = (p.images && p.images.length > 0) ? p.images[0] : '';
        const secondImage = (p.images && p.images.length > 1) ? p.images[1] : firstImage;

        card.innerHTML = `
            <div class="product-card-image-wrapper">
                 <div class="product-card-inner">
                    <div class="product-card-front">
                        <img src="${firstImage}" alt="${p.name}" class="product-card-image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/2d3748/e2e8f0?text=No+Image';this.style.display='block'">
                    </div>
                    <div class="product-card-back">
                         <img src="${secondImage}" alt="${p.name} (back)" class="product-card-image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/2d3748/e2e8f0?text=No+Image';this.style.display='block'">
                    </div>
                </div>
            </div>
            <h3 class="font-bold text-lg">${p.name}</h3>
            <p style="color: var(--accent-color);">${p.sellingPrice.toFixed(2)} EGP</p>
            <p class="text-sm text-gray-500">Stock: ${totalQuantity}</p>
            <div class="mt-auto pt-4" data-product-id="${p.id}">
                <label class="text-xs">${translations[state.lang].color}</label>
                <div class="color-swatch-container">
                    ${colorSwatches || 'N/A'}
                </div>
                <label class="text-xs">${translations[state.lang].size}</label>
                <select class="gallery-size-selector w-full p-2 mb-2 rounded-lg" ${availableSizes.length === 0 ? 'disabled' : ''}>
                     ${sizeOptions || '<option>N/A</option>'}
                </select>
                 <input type="number" value="1" min="1" class="quantity-input w-full p-2 mb-2 rounded-lg">
                <button class="add-gallery-to-cart-btn btn-primary w-full py-2 px-4 rounded-lg" ${totalQuantity === 0 ? 'disabled' : ''}>${buttonText}</button>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function renderInventoryTable() {
    const tbody = document.getElementById('inventory-table').querySelector('tbody');
    const searchTerm = document.getElementById('inventory-search').value.toLowerCase();
    tbody.innerHTML = '';
    let filtered = state.products;
    if (state.activeCategory !== 'All') {
        filtered = filtered.filter(p => p.category === state.activeCategory);
    }
    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            (p.code && p.code.toLowerCase().includes(searchTerm))
        );
    }
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-center p-4">No products found.</td></tr>`;
        return;
    }
    filtered.forEach(p => {
        const totalQuantity = getProductTotalQuantity(p);
        const colorsString = p.colors ? Object.keys(p.colors).join(', ') : 'N/A';
        const firstImage = (p.images && p.images.length > 0) ? p.images[0] : '';

        const row = document.createElement('tr');
        row.className = "border-b border-gray-200 hover:bg-gray-50";
        row.innerHTML = `
            <td class="p-2">${p.name}</td>
            <td class="p-2">${p.code || 'N/A'}</td>
            <td class="p-2">${p.category || 'N/A'}</td>
            <td class="p-2"><img src="${firstImage}" alt="${p.name}" class="h-12 w-18 object-cover rounded" onerror="this.onerror=null;this.src='https://placehold.co/100x67/2d3748/e2e8f0?text=No+Img';this.style.display='block'"></td>
            <td class="p-2">${totalQuantity}</td>
            <td class="p-2">${p.purchasePrice.toFixed(2)} EGP</td>
            <td class="p-2">${p.sellingPrice.toFixed(2)} EGP</td>
            <td class="p-2">${colorsString}</td>
            <td class="p-2">
                <div class="flex flex-col space-y-1 items-center">
                    <button class="edit-product-btn btn-secondary text-xs py-1 px-2 rounded w-full" data-id="${p.id}" data-lang-key="modalEditTitle">Edit</button>
                    <button class="delete-product-btn btn-danger text-xs py-1 px-2 rounded w-full" data-id="${p.id}" data-lang-key="deleteSelected">Delete</button>
                    <button class="show-barcodes-btn btn-primary text-xs py-1 px-2 rounded w-full" data-id="${p.id}" data-lang-key="btnBarcode">Barcodes</button>
                </div>
            </td>`;
        tbody.appendChild(row);
    });
}

function renderSellingPage() {
    renderReceiptTabs();
    renderActiveReceiptContent();
}

/**
 * =================================================================
 * تعديل: تغيير اسم تابات الفواتير
 * =================================================================
 * * تم تعديل هذه الدالة لتظهر اسم العميل في التاب بدلاً من "Receipt X".
 * * إذا لم يتم إدخال اسم العميل، سيظهر الاسم الافتراضي.
 */
function renderReceiptTabs() {
    const tabsContainer = document.getElementById('receipt-tabs-container');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';
    state.receipts.forEach((receipt, index) => {
        const tab = document.createElement('div');
        tab.className = `receipt-tab flex items-center ${receipt.id === state.activeReceiptId ? 'active' : ''}`;
        tab.dataset.receiptId = receipt.id;

        // تحديد اسم التاب: اسم العميل أو رقم الفاتورة
        const tabLabel = receipt.customerName && receipt.customerName.trim() ? receipt.customerName.trim() : `Receipt ${index + 1}`;
        const shortLabel = receipt.customerName && receipt.customerName.trim() ? receipt.customerName.trim().charAt(0).toUpperCase() : index + 1;

        tab.innerHTML = `
            <div class="tab-content">
                 <span class="tab-short-text">${shortLabel}</span>
                 <span class="tab-full-text">${tabLabel}</span>
                 <button class="close-receipt-btn" data-receipt-id="${receipt.id}">&times;</button>
            </div>
        `;
        tabsContainer.appendChild(tab);
    });

    const addBtn = document.createElement('button');
    addBtn.id = 'add-receipt-btn';
    addBtn.className = 'py-2 px-3 flex items-center justify-center rounded-t-lg ml-1';
    addBtn.innerHTML = `
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
    `;
    tabsContainer.appendChild(addBtn);
}

/**
 * =================================================================
 * تعديل: الاحتفاظ ببيانات العميل في الفاتورة
 * =================================================================
 * * تم تعديل هذه الدالة لتقوم بملء حقول بيانات العميل
 * بالقيم المحفوظة في كائن الفاتورة (receipt object).
 */
function renderActiveReceiptContent() {
    const activeReceipt = state.receipts.find(r => r.id === state.activeReceiptId);
    const contentContainer = document.getElementById('active-receipt-content');
    if (!activeReceipt || !contentContainer) {
        if (contentContainer) contentContainer.innerHTML = '';
        return;
    }

    const productOptions = state.products
        .filter(p => getProductTotalQuantity(p) > 0)
        .map(p => `<option value="${p.id}">${p.name} (Stock: ${getProductTotalQuantity(p)})</option>`)
        .join('');

    const sellerOptions = state.users.map(user => `<option value="${user.username}">${user.username}</option>`).join('');

    contentContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="receipt-content-${activeReceipt.id}">
            <div class="md:col-span-2">
                <h2 class="text-2xl font-bold mb-4" data-lang-key="addToCartTitle">Add Products to Cart</h2>
                
                <div class="mb-4">
                    <label class="block mb-2" data-lang-key="barcodeScanner">Scan Barcode</label>
                    <div class="flex space-x-2">
                        <input type="text" class="barcode-scanner-input flex-grow p-2 rounded-lg focus:ring-2 focus:ring-highlight-color" data-lang-key="barcodePlaceholder" placeholder="Scan or type and press Enter...">
                    </div>
                </div>

                <div class="mb-4">
                    <select class="product-selection w-full p-2 rounded-lg">
                        <option value="">Select a product</option>
                        ${productOptions}
                    </select>
                </div>
                <div class="product-details-for-sale hidden">
                    <div class="mb-4"><label class="block mb-2" data-lang-key="quantity">Quantity</label><input type="number" class="sale-quantity w-full p-2 rounded-lg" value="1" min="1"></div>
                    <div class="mb-4"><label class="block mb-2" data-lang-key="color">Color</label><select class="sale-color w-full p-2 rounded-lg"></select></div>
                    <div class="mb-4"><label class="block mb-2" data-lang-key="size">Size</label><select class="sale-size w-full p-2 rounded-lg"></select></div>
                    <div class="mb-4"><label class="block mb-2" data-lang-key="sellingPrice">Selling Price (EGP)</label><input type="number" class="sale-price w-full p-2 rounded-lg"></div>
                    <button class="add-to-cart-btn btn-primary w-full py-2 px-4 rounded-lg" data-target-cart="receipt" data-lang-key="addToCart">Add to Cart</button>
                </div>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg" style="background-color: var(--secondary-bg);">
                <h2 class="text-2xl font-bold mb-4" data-lang-key="cart">Cart</h2>
                <div class="cart-items space-y-2 max-h-60 overflow-y-auto mb-4"></div>
                 <div class="border-t border-gray-300 mt-4 pt-4 space-y-2">
                    <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="customerPhone">Customer Phone</label>
                        <input type="tel" class="customer-phone-input w-2/3 p-2 rounded-lg" value="${activeReceipt.customerPhone || ''}">
                    </div>
                     <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="customerName">Customer Name</label>
                        <input type="text" class="customer-name-input w-2/3 p-2 rounded-lg" value="${activeReceipt.customerName || ''}">
                    </div>
                    <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="customerAddress">Customer Address</label>
                        <input type="text" class="customer-address-input w-2/3 p-2 rounded-lg" value="${activeReceipt.customerAddress || ''}">
                    </div>
                    <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="colCustomerCity">City</label>
                        <input type="text" class="customer-city-input w-2/3 p-2 rounded-lg" value="${activeReceipt.customerCity || ''}">
                    </div>
                    <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="cashier">Cashier</label>
                        <select class="receipt-seller-select w-2/3 p-2 rounded-lg">
                            ${sellerOptions}
                        </select>
                    </div>
                </div>
                <div class="border-t border-gray-300 mt-4 pt-4 space-y-4">
                    <div class="flex justify-between items-center text-lg"><span data-lang-key="subtotal">Subtotal:</span><span class="cart-subtotal">0 EGP</span></div>
                    <div class="flex items-center space-x-2"><label class="w-1/2" data-lang-key="discountPercent">Discount (%):</label><input type="number" class="discount-percentage w-1/2 p-2 rounded-lg" min="0" max="100"></div>
                    <div class="flex items-center space-x-2"><label class="w-1/2" data-lang-key="discountAmount">Discount (EGP):</label><input type="number" class="discount-amount w-1/2 p-2 rounded-lg" min="0"></div>
                    
                    <div class="flex items-center justify-between">
                         <div class="flex items-center space-x-2">
                             <input type="checkbox" id="free-delivery-checkbox" class="h-5 w-5 rounded">
                             <label for="free-delivery-checkbox" data-lang-key="freeDelivery">Free Delivery</label>
                         </div>
                         <div id="delivery-fee-container" class="flex items-center space-x-2">
                             <label data-lang-key="deliveryFee">Delivery Fee:</label>
                             <input type="number" class="delivery-fee-input w-24 p-2 rounded-lg" min="0">
                         </div>
                    </div>

                    ${activeReceipt.isFromBooking && activeReceipt.originalDeposit > 0 ? `
                        <div class="flex justify-between items-center text-lg">
                            <span data-lang-key="depositPaid">Deposit Paid:</span>
                            <span class="text-green-600">${activeReceipt.originalDeposit.toFixed(2)} EGP</span>
                        </div>
                        <div class="flex justify-between font-bold text-xl" style="color: var(--accent-color);">
                            <span data-lang-key="amountRemaining">Amount Remaining:</span>
                            <span class="cart-total">0 EGP</span>
                        </div>
                    ` : `
                        <div class="flex justify-between font-bold text-xl" style="color: var(--accent-color);">
                            <span data-lang-key="total">Total:</span>
                            <span class="cart-total">0 EGP</span>
                        </div>
                    `}

                    <div>
                        <label class="block mb-2 text-sm" data-lang-key="paymentMethod">Payment Method</label>
                        <div class="flex items-center space-x-2">
                            <button type="button" class="payment-method-btn selected flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg" data-method="cash">
                                <span data-lang-key="cash">Cash</span>
                            </button>
                            <button type="button" class="payment-method-btn flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg" data-method="instaPay">
                                <span data-lang-key="instaPay">InstaPay</span>
                            </button>
                             <button type="button" class="payment-method-btn flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg" data-method="vCash">
                                <span data-lang-key="vCash">VCash</span>
                            </button>
                        </div>
                    </div>
                    <div class="mt-4"><label class="block mb-2" data-lang-key="paidAmount">Paid Amount (EGP)</label><input type="number" class="paid-amount w-full p-2 rounded-lg" data-lang-key="paidAmountPlaceholder" placeholder="Enter amount paid"></div>
                    <div class="flex space-x-2">
                        <button class="complete-sale-btn btn-primary w-full mt-4 py-3 px-4 rounded-lg" data-lang-key="completeSale">Complete Sale</button>
                        <button class="save-as-booking-btn btn-secondary w-full mt-4 py-3 px-4 rounded-lg" data-lang-key="saveAsBooking">Save as Booking</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    const sellerSelect = contentContainer.querySelector('.receipt-seller-select');
    if (sellerSelect) {
        sellerSelect.value = activeReceipt.seller || state.currentUser.username;
    }

    updateUIText();
    renderCart(activeReceipt.id);
}

function renderCart(receiptId) {
    const receipt = state.receipts.find(r => r.id === receiptId);
    if (!receipt) return;

    const container = document.querySelector(`#receipt-content-${receiptId}`);
    if (!container) return;

    const cartItemsContainer = container.querySelector('.cart-items');
    const subtotalEl = container.querySelector('.cart-subtotal');
    const totalEl = container.querySelector('.cart-total');
    const discountPercentEl = container.querySelector('.discount-percentage');
    const discountAmountEl = container.querySelector('.discount-amount');
    const deliveryFeeEl = container.querySelector('.delivery-fee-input');
    const freeDeliveryCheckbox = container.querySelector('#free-delivery-checkbox');

    cartItemsContainer.innerHTML = '';
    let subtotal = receipt.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    receipt.cart.forEach((item, index) => {
        const product = state.products.find(p => p.id === item.productId);
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'flex justify-between items-center bg-white p-2 rounded';
        cartItemDiv.innerHTML = `
            <div>
                <p class="font-bold">${product ? product.name : 'Unknown Item'} (${item.color} / ${item.size})</p>
                <p class="text-sm text-gray-500">${item.quantity} x ${item.price.toFixed(2)} EGP</p>
            </div>
            <button class="remove-from-cart-btn btn-danger text-lg" data-index="${index}" data-target-cart="receipt" data-receipt-id="${receiptId}">&times;</button>`;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    subtotalEl.textContent = `${subtotal.toFixed(2)} EGP`;

    const discountPercent = parseFloat(discountPercentEl.value) || 0;
    const discountAmount = parseFloat(discountAmountEl.value) || 0;

    let total = subtotal;
    if (discountPercent > 0) {
        total -= total * (discountPercent / 100);
    } else if (discountAmount > 0) {
        total -= discountAmount;
    }

    const deliveryFee = freeDeliveryCheckbox.checked ? 0 : parseFloat(deliveryFeeEl.value) || 0;
    total += deliveryFee;

    // If from booking, subtract deposit for display purposes
    if (receipt.isFromBooking && receipt.originalDeposit > 0) {
        total -= receipt.originalDeposit;
    }

    totalEl.textContent = `${Math.max(0, total).toFixed(2)} EGP`;
    updateCartIconCount();
}

// --- Booking Functions ---
function renderBookingPage() {
    const container = document.getElementById('booking-page');
    if (!container) return;

    const listContainer = document.getElementById('open-bookings-list');
    const searchTerm = state.bookingSearchTerm.toLowerCase();

    let filteredBookings = state.bookings.filter(b => !b.isCompleted);

    if (searchTerm) {
        filteredBookings = filteredBookings.filter(b =>
            (b.id && b.id.toLowerCase().includes(searchTerm)) ||
            (b.customerName && b.customerName.toLowerCase().includes(searchTerm)) ||
            (b.customerPhone && b.customerPhone.includes(searchTerm))
        );
    }

    listContainer.innerHTML = ''; // Clear previous list
    if (filteredBookings.length === 0) {
        listContainer.innerHTML = `<p class="text-center text-gray-400 p-4">No open bookings found.</p>`;
        return;
    }

    filteredBookings.forEach(booking => {
        const subtotal = booking.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const amountDue = subtotal - booking.deposit;
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-lg shadow-md';
        const bookingDateTime = new Date(booking.createdAt).toLocaleString();

        // Determine deposit payment method display
        let depositMethodDisplay = '';
        if (booking.deposit > 0 && booking.depositPaymentMethod) {
            depositMethodDisplay = ` (${translations[state.lang][booking.depositPaymentMethod] || booking.depositPaymentMethod})`;
        }


        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <p class="font-bold text-lg">${booking.customerName || 'No Name'} <span class="text-sm font-normal text-gray-500">(${booking.customerPhone || 'No Phone'})</span></p>
                    <p class="text-xs text-gray-400">ID: ${booking.id}</p>
                    <p class="text-xs text-gray-400">Date: ${bookingDateTime}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button class="edit-booking-btn btn-secondary py-1 px-3 rounded text-xs flex items-center justify-center" data-booking-id="${booking.id}" title="${translations[state.lang].editBooking}">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.09-.76-1.71-1.06l-.35-2.5c-.04-.22-.24-.38-.46-.38h-4c-.22 0-.42.16-.46.38l-.35 2.5c-.62.3-1.19.66-1.71 1.06l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                        </svg>
                    </button>
                    <button class="delete-booking-btn btn-danger py-1 px-3 rounded text-xs" data-booking-id="${booking.id}" data-lang-key="btnDelete">Delete</button>
                    <button class="complete-sale-from-booking-btn btn-primary py-1 px-3 rounded text-xs" data-booking-id="${booking.id}" data-lang-key="completeSale">Complete Sale</button>
                    <button class="print-booking-btn btn-secondary py-1 px-3 rounded text-xs" data-booking-id="${booking.id}" data-lang-key="btnPrint">Print</button>
                </div>
            </div>
            <div class="mt-2 border-t pt-2">
                 <ul class="text-sm space-y-1">
                    ${booking.cart.map(item => `<li>${item.quantity}x ${item.productName} (${item.color}/${item.size})</li>`).join('')}
                 </ul>
                 <div class="text-right mt-2 font-semibold">
                     <p>Subtotal: ${subtotal.toFixed(2)} EGP</p>
                     <p>Deposit: ${booking.deposit.toFixed(2)} EGP${depositMethodDisplay}</p>
                     <p class="text-lg text-[var(--accent-color)]">Amount Due: ${amountDue.toFixed(2)} EGP</p>
                 </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
    updateUIText();
}


async function saveReceiptAsBooking(receiptId, deposit) {
    const receipt = state.receipts.find(r => r.id === receiptId);
    if (!receipt || receipt.cart.length === 0) {
        showNotification("Cart is empty.", "info");
        return;
    }

    const container = document.getElementById(`receipt-content-${receiptId}`);
    const customerPhone = container.querySelector('.customer-phone-input').value.trim();
    const customerName = container.querySelector('.customer-name-input').value.trim();
    const customerAddress = container.querySelector('.customer-address-input').value.trim();
    const customerCity = container.querySelector('.customer-city-input').value.trim();
    const isFreeDelivery = container.querySelector('#free-delivery-checkbox').checked;
    const depositPaymentMethod = container.querySelector('.payment-method-btn.selected')?.dataset.method || 'cash'; // Capture deposit payment method


    if (!customerName || !customerPhone) {
        showNotification("Customer name and phone are required for bookings.", "error");
        return;
    }

    const newBooking = {
        id: getDailyId('B', state.bookings),
        cart: JSON.parse(JSON.stringify(receipt.cart)), // Deep copy
        customerName,
        customerPhone,
        customerAddress,
        customerCity,
        deposit: deposit,
        depositPaymentMethod: depositPaymentMethod, // Save deposit payment method
        seller: receipt.seller,
        isCompleted: false,
        isFreeDelivery: isFreeDelivery, // Add free delivery status
        createdAt: new Date().toISOString()
    };

    state.bookings.push(newBooking);

    const index = state.receipts.findIndex(r => r.id === receiptId);
    if (index > -1) {
        state.receipts.splice(index, 1);
        if (state.activeReceiptId === receiptId) {
            if (state.receipts.length === 0) createNewReceipt(false);
            state.activeReceiptId = state.receipts[0]?.id || null;
        }
    }

    await saveData();
    cartSession.save();
    closeBookingConfirmationModal();
    render();
    showNotification(translations[state.lang].bookingSaved, 'success');
}

// Function to delete a booking and optionally restore stock
async function deleteBooking(bookingId, restoreStock = true, doSave = true) {
    const bookingIndex = state.bookings.findIndex(b => b.id === bookingId);
    if (bookingIndex === -1) {
        showNotification("Booking not found.", "error");
        return;
    }

    const bookingToDelete = state.bookings[bookingIndex];

    if (restoreStock) {
        bookingToDelete.cart.forEach(item => {
            const product = state.products.find(p => p.id === item.productId);
            if (product && product.colors[item.color] && product.colors[item.color].sizes[item.size]) {
                product.colors[item.color].sizes[item.size].quantity += item.quantity;
            }
        });
    }

    state.bookings.splice(bookingIndex, 1);
    if (doSave) {
        await saveData();
        render();
        showNotification("Booking deleted.", "success");
    }
}

// Function to print a booking receipt
async function printBooking(bookingId) {
    try {
        const booking = state.bookings.find(b => b.id === bookingId);
        if (!booking) {
            showNotification(`Booking with ID ${bookingId} not found.`, 'error');
            return;
        }

        const bookingData = await window.api.loadBookingTemplate();
        if (!bookingData || bookingData.error) {
            console.error("Failed to load booking template:", bookingData.error);
            showNotification("Error: Could not load booking template.", 'error');
            return;
        }

        let { template, logoBase64 } = bookingData;

        let itemsHtml = booking.cart.map(item => `<tr><td>${item.productName} (${item.color}/${item.size})</td><td>${item.quantity}</td><td>${item.price.toFixed(2)}</td><td>${(item.price * item.quantity).toFixed(2)}</td></tr>`).join('');

        const subtotal = booking.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const amountDue = subtotal - booking.deposit;

        // Get deposit payment method for printing
        const depositMethodPrint = booking.depositPaymentMethod ? ` (${translations[state.lang][booking.depositPaymentMethod] || booking.depositPaymentMethod})` : '';

        template = template.replace('{{bookingDate}}', new Date(booking.createdAt).toLocaleString())
            .replace('{{bookingId}}', booking.id)
            .replace('{{username}}', booking.seller || 'N/A')
            .replace('{{customerName}}', booking.customerName || 'N/A')
            .replace('{{customerPhone}}', booking.customerPhone || 'N/A')
            .replace('{{customerAddress}}', booking.customerAddress || 'N/A')
            .replace('{{customerCity}}', booking.customerCity || 'N/A') // Pass customerCity to template
            .replace('{{itemsHtml}}', itemsHtml)
            .replace('{{subtotal}}', subtotal.toFixed(2))
            .replace('{{deposit}}', booking.deposit.toFixed(2) + depositMethodPrint) // Include method here
            .replace('{{amountDue}}', amountDue.toFixed(2))
            .replace('{{logoSrc}}', logoBase64 || '');

        const bookingWindow = window.open('', 'PRINT', 'height=800,width=400');
        bookingWindow.document.write(template);
        bookingWindow.document.close();
        setTimeout(() => {
            bookingWindow.focus();
            bookingWindow.print();
            setTimeout(() => bookingWindow.close(), 1000);
        }, 500);
    } catch (error) {
        console.error("Error printing booking:", error);
        showNotification("An error occurred while printing the booking.", "error");
    }
}

function showEditBookingModal(bookingId) {
    state.editingBookingId = bookingId;
    const booking = state.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    let modal = document.getElementById('booking-edit-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'booking-edit-modal';
        modal.className = 'modal fixed inset-0 z-50 flex items-center justify-center hidden';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4" data-lang-key="editBooking">Edit Booking</h2>
            <form id="edit-booking-form" class="space-y-4">
                <div>
                    <label for="edit-customer-name" class="block mb-1 font-medium" data-lang-key="customerName">Customer Name</label>
                    <input type="text" id="edit-customer-name" value="${booking.customerName || ''}" class="w-full p-2 rounded-lg">
                </div>
                <div>
                    <label for="edit-customer-phone" class="block mb-1 font-medium" data-lang-key="customerPhone">Customer Phone</label>
                    <input type="tel" id="edit-customer-phone" value="${booking.customerPhone || ''}" class="w-full p-2 rounded-lg">
                </div>
                <div>
                    <label for="edit-customer-address" class="block mb-1 font-medium" data-lang-key="customerAddress">Customer Address</label>
                    <input type="text" id="edit-customer-address" value="${booking.customerAddress || ''}" class="w-full p-2 rounded-lg">
                </div>
                <div>
                    <label for="edit-customer-city" class="block mb-1 font-medium" data-lang-key="colCustomerCity">City</label>
                    <input type="text" id="edit-customer-city" value="${booking.customerCity || ''}" class="w-full p-2 rounded-lg">
                </div>
                <div>
                    <label for="edit-deposit" class="block mb-1 font-medium" data-lang-key="deposit">Deposit (EGP)</label>
                    <input type="number" id="edit-deposit" value="${booking.deposit.toFixed(2) || '0.00'}" class="w-full p-2 rounded-lg" min="0" step="0.01">
                </div>
                <div>
                    <label class="block mb-1 font-medium" data-lang-key="depositPaymentMethod">Deposit Method</label>
                    <select id="edit-deposit-payment-method" class="w-full p-2 rounded-lg">
                        <option value="cash" ${booking.depositPaymentMethod === 'cash' ? 'selected' : ''}>${translations[state.lang].cash}</option>
                        <option value="instaPay" ${booking.depositPaymentMethod === 'instaPay' ? 'selected' : ''}>${translations[state.lang].instaPay}</option>
                        <option value="vCash" ${booking.depositPaymentMethod === 'vCash' ? 'selected' : ''}>${translations[state.lang].vCash}</option>
                    </select>
                </div>
                <div class="flex items-center space-x-2">
                    <input type="checkbox" id="edit-free-delivery" class="h-5 w-5 rounded" ${booking.isFreeDelivery ? 'checked' : ''}>
                    <label for="edit-free-delivery" data-lang-key="freeDelivery">Free Delivery</label>
                </div>
                <div class="flex justify-end space-x-4 mt-6">
                    <button type="button" id="cancel-edit-booking-btn" class="btn-secondary py-2 px-4 rounded-lg" data-lang-key="btnCancel">Cancel</button>
                    <button type="submit" class="btn-primary py-2 px-4 rounded-lg" data-lang-key="btnSave">Save Changes</button>
                </div>
            </form>
        </div>
    `;
    updateUIText();
    modal.classList.remove('hidden');

    // Ensure listeners are attached AFTER content is set
    document.getElementById('edit-booking-form').addEventListener('submit', handleEditBookingSubmit);
    document.getElementById('cancel-edit-booking-btn').addEventListener('click', closeEditBookingModal);
}

async function handleEditBookingSubmit(e) {
    e.preventDefault();
    const booking = state.bookings.find(b => b.id === state.editingBookingId);
    if (!booking) return;

    booking.customerName = document.getElementById('edit-customer-name').value.trim();
    booking.customerPhone = document.getElementById('edit-customer-phone').value.trim();
    booking.customerAddress = document.getElementById('edit-customer-address').value.trim();
    booking.customerCity = document.getElementById('edit-customer-city').value.trim();
    booking.deposit = parseFloat(document.getElementById('edit-deposit').value) || 0;
    booking.depositPaymentMethod = document.getElementById('edit-deposit-payment-method').value; // Save deposit payment method
    booking.isFreeDelivery = document.getElementById('edit-free-delivery').checked;

    await saveData();
    closeEditBookingModal();
    render();
    showNotification("Booking updated successfully!", 'success');
}

function closeEditBookingModal() {
    state.editingBookingId = null;
    const modal = document.getElementById('booking-edit-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}


async function completeSaleFromBooking(bookingId) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    createNewReceipt(false);
    const newReceipt = state.receipts.find(r => r.id === state.activeReceiptId);

    // Deep copy the cart items to the new receipt
    newReceipt.cart = JSON.parse(JSON.stringify(booking.cart));
    newReceipt.isFromBooking = true; // Flag that this receipt originated from a booking
    newReceipt.originalDeposit = booking.deposit; // Store the original deposit
    newReceipt.depositPaymentMethod = booking.depositPaymentMethod; // Store deposit payment method from booking

    // Copy customer data from booking to receipt
    newReceipt.customerName = booking.customerName;
    newReceipt.customerPhone = booking.customerPhone;
    newReceipt.customerAddress = booking.customerAddress;
    newReceipt.customerCity = booking.customerCity;


    // Delete the booking without restoring stock as it's being converted to a sale
    await deleteBooking(booking.id, false, false); // Do not restore stock, do not save immediately

    state.currentPage = 'selling-page';
    await saveData(); // Save after deleting the booking and updating state
    render(); // This will now render the new receipt with customer data

    showNotification('Booking loaded to a new receipt for completion.', 'success');
}


function renderSalesHistory() {
    generateReport();
}


function renderCustomersPage() {
    const tbody = document.getElementById('customers-table').querySelector('tbody');
    const searchTerm = document.getElementById('customer-search').value.toLowerCase();

    let filteredCustomers = state.customers;

    if (searchTerm) {
        filteredCustomers = filteredCustomers.filter(c =>
            c.name.toLowerCase().includes(searchTerm) ||
            c.phone.includes(searchTerm)
        );
    }

    tbody.innerHTML = '';
    if (filteredCustomers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center p-4">No customers found.</td></tr>`;
        return;
    }

    filteredCustomers.forEach(customer => {
        const row = document.createElement('tr');
        row.className = "border-b border-gray-200 hover:bg-gray-50";
        row.innerHTML = `
            <td class="p-4">${customer.name}</td>
            <td class="p-4">${customer.phone}</td>
            <td class="p-4">${customer.address || 'N/A'}</td>
            <td class="p-4">${customer.city || 'N/A'}</td>
            <td class="p-4">${customer.totalItemsBought}</td>
            <td class="p-4">${customer.lastPaymentDate ? new Date(customer.lastPaymentDate).toLocaleDateString() : 'N/A'}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderSalariesPage() {
    const tbody = document.getElementById('salaries-table').querySelector('tbody');
    const searchTerm = state.salariesSearchTerm.toLowerCase();
    tbody.innerHTML = '';

    let filteredUsers = state.users;
    if (searchTerm) {
        filteredUsers = filteredUsers.filter(u => u.username.toLowerCase().includes(searchTerm));
    }

    filteredUsers.forEach(user => {
        // Ensure salary data exists for the user, initialize if not
        const userData = state.salaries[user.username] || { fixed: 0, commission: 0, bonus: 0 };
        if (userData.bonus === undefined) { // Initialize bonus if it's missing from old data
            userData.bonus = 0;
        }

        const piecesSold = state.sales
            .filter(sale => sale.cashier === user.username)
            .reduce((total, sale) => total + sale.items.reduce((itemTotal, item) => itemTotal + (item.quantity - (item.returnedQty || 0)), 0), 0);

        const totalCommission = piecesSold * userData.commission;
        const totalSalary = userData.fixed + totalCommission + userData.bonus; // Include bonus in total salary

        const row = document.createElement('tr');
        row.className = "border-b border-gray-200";
        row.innerHTML = `
            <td class="p-4 font-bold">${user.username}</td>
            <td class="p-4"><input type="number" class="salary-input w-32 p-2 rounded-lg" data-user="${user.username}" data-type="fixed" value="${userData.fixed}"></td>
            <td class="p-4"><input type="number" class="salary-input w-32 p-2 rounded-lg" data-user="${user.username}" data-type="commission" value="${userData.commission}"></td>
            <td class="p-4"><input type="number" class="salary-input w-32 p-2 rounded-lg" data-user="${user.username}" data-type="bonus" value="${userData.bonus}"></td>
            <td class="p-4">${piecesSold}</td>
            <td class="p-4">${totalCommission.toFixed(2)} EGP</td>
            <td class="p-4 font-bold text-lg">${totalSalary.toFixed(2)} EGP</td>
        `;
        tbody.appendChild(row);
    });
}


// --- Event Listeners ---
function setupEventListeners() {
    document.addEventListener('input', (e) => {
        if (e.target.id === 'product-search') renderProductGallery();
        if (e.target.id === 'inventory-search') renderInventoryTable();
        if (e.target.id === 'customer-search') renderCustomersPage();
        if (e.target.id === 'booking-search-input') {
            state.bookingSearchTerm = e.target.value;
            renderBookingPage();
        }
        if (e.target.id === 'salaries-search-input') {
            state.salariesSearchTerm = e.target.value;
            renderSalariesPage();
        }

        // --- تعديل: حفظ بيانات العميل في الفاتورة فور إدخالها ---
        if (e.target.classList.contains('customer-phone-input') ||
            e.target.classList.contains('customer-name-input') ||
            e.target.classList.contains('customer-address-input') ||
            e.target.classList.contains('customer-city-input')) {

            const activeReceipt = state.receipts.find(r => r.id === state.activeReceiptId);
            if (activeReceipt) {
                if (e.target.classList.contains('customer-phone-input')) {
                    activeReceipt.customerPhone = e.target.value;
                    // Auto-fill other details if phone exists
                    const customer = state.customers.find(c => c.phone === e.target.value.trim());
                    if (customer) {
                        const parent = e.target.closest('div.grid');
                        parent.querySelector('.customer-name-input').value = customer.name;
                        parent.querySelector('.customer-address-input').value = customer.address || '';
                        parent.querySelector('.customer-city-input').value = customer.city || '';
                        activeReceipt.customerName = customer.name;
                        activeReceipt.customerAddress = customer.address || '';
                        activeReceipt.customerCity = customer.city || '';
                    }
                }
                if (e.target.classList.contains('customer-name-input')) {
                    activeReceipt.customerName = e.target.value;
                }
                if (e.target.classList.contains('customer-address-input')) {
                    activeReceipt.customerAddress = e.target.value;
                }
                if (e.target.classList.contains('customer-city-input')) {
                    activeReceipt.customerCity = e.target.value;
                }

                renderReceiptTabs(); // تحديث التابات فوراً
                cartSession.save(); // حفظ التغييرات في الجلسة
            }
        }


        if (e.target.classList.contains('discount-percentage') || e.target.classList.contains('discount-amount') || e.target.classList.contains('delivery-fee-input')) {
            const activeReceiptContent = document.getElementById(`receipt-content-${state.activeReceiptId}`);
            if (activeReceiptContent) {
                if (e.target.classList.contains('discount-percentage')) activeReceiptContent.querySelector('.discount-amount').value = '';
                if (e.target.classList.contains('discount-amount')) activeReceiptContent.querySelector('.discount-percentage').value = '';
                renderCart(state.activeReceiptId);
            }
        }
        if (['report-month-picker', 'report-day-picker', 'history-search', 'user-filter'].includes(e.target.id)) generateReport();

        // Update item price in cart when selling price input changes
        if (e.target.classList.contains('sale-price')) {
            const container = e.target.closest('[id$="-content"]');
            const productId = container.querySelector('.product-selection').value;
            const selectedColor = container.querySelector('.sale-color').value;
            const selectedSize = container.querySelector('.sale-size').value;
            const newPrice = parseFloat(e.target.value) || 0;

            const activeReceipt = state.receipts.find(r => r.id === state.activeReceiptId);
            if (activeReceipt) {
                const cartItem = activeReceipt.cart.find(item =>
                    item.productId === productId && item.color === selectedColor && item.size === selectedSize
                );
                if (cartItem) {
                    cartItem.price = newPrice;
                    cartSession.save();
                    renderCart(state.activeReceiptId);
                }
            }
        }
    });

    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('salary-input')) {
            const username = e.target.dataset.user;
            const type = e.target.dataset.type;
            const value = parseFloat(e.target.value) || 0;

            if (!state.salaries[username]) {
                state.salaries[username] = { fixed: 0, commission: 0, bonus: 0 }; // Ensure bonus is initialized
            }
            state.salaries[username][type] = value;
            saveData();
            renderSalariesPage();
        }
    });


    document.addEventListener('keydown', async (e) => {
        // Safely check if modals are open before attempting to close
        const productModal = document.getElementById('product-modal');
        const barcodeModal = document.getElementById('barcode-modal');
        const receiptSelectionModal = document.getElementById('receipt-selection-modal');
        const returnModal = document.getElementById('return-modal');
        const adminPasswordModal = document.getElementById('admin-password-modal');
        const categoryModal = document.getElementById('category-modal');
        const bookingConfirmationModal = document.getElementById('booking-confirmation-modal');
        const bookingEditModal = document.getElementById('booking-edit-modal');

        if (e.key === 'Escape') {
            if (productModal && !productModal.classList.contains('hidden')) closeProductModal();
            else if (barcodeModal && !barcodeModal.classList.contains('hidden')) closeBarcodeModal();
            else if (receiptSelectionModal && !receiptSelectionModal.classList.contains('hidden')) closeReceiptSelectionModal();
            else if (returnModal && !returnModal.classList.contains('hidden')) closeReturnModal();
            else if (adminPasswordModal && !adminPasswordModal.classList.contains('hidden')) closeAdminPasswordModal();
            else if (categoryModal && !categoryModal.classList.contains('hidden')) closeCategoryModal();
            else if (bookingConfirmationModal && !bookingConfirmationModal.classList.contains('hidden')) closeBookingConfirmationModal();
            else if (bookingEditModal && !bookingEditModal.classList.contains('hidden')) closeEditBookingModal();
        }

        if (e.key === 'Enter') {
            let enterHandled = false;

            if (document.activeElement.classList.contains('barcode-scanner-input')) {
                e.preventDefault();
                const barcodeInput = document.activeElement;
                const barcode = barcodeInput.value.trim();
                if (barcode) {
                    handleBarcodeScan(barcode);
                    barcodeInput.value = '';
                }
                enterHandled = true;
            }
            else if (adminPasswordModal && !adminPasswordModal.classList.contains('hidden')) {
                document.getElementById('admin-password-form').querySelector('button[type="submit"]').click();
                enterHandled = true;
            }
            else if (productModal && !productModal.classList.contains('hidden')) {
                if (document.activeElement.tagName !== 'BUTTON') {
                    document.getElementById('product-form').querySelector('button[type="submit"]').click();
                    enterHandled = true;
                }
            }
            else if (returnModal && !returnModal.classList.contains('hidden')) {
                document.getElementById('confirm-return-btn').click();
                enterHandled = true;
            }
            else if (barcodeModal && !barcodeModal.classList.contains('hidden')) {
                closeBarcodeModal();
                enterHandled = true;
            }
            else if (categoryModal && !categoryModal.classList.contains('hidden')) {
                if (document.activeElement.id === 'new-category-name') {
                    document.getElementById('add-category-btn').click();
                    enterHandled = true;
                }
            }
            else if (state.currentPage === 'selling-page' && document.activeElement.classList.contains('paid-amount')) {
                const activeReceiptContent = document.getElementById(`receipt-content-${state.activeReceiptId}`);
                if (activeReceiptContent) {
                    activeReceiptContent.querySelector('.complete-sale-btn').click();
                    enterHandled = true;
                }
            }
            else if (bookingEditModal && !bookingEditModal.classList.contains('hidden')) {
                document.getElementById('edit-booking-form').querySelector('button[type="submit"]').click();
                enterHandled = true;
            }

            if (enterHandled) {
                e.preventDefault();
            }
        }

        if (e.key === 'F1') {
            e.preventDefault();
            if (state.isAdminMode) {
                window.api.openUsersWindow();
            } else {
                showAdminPasswordModal();
                const adminForm = document.getElementById('admin-password-form');
                const submitHandler = async function (ev) {
                    ev.preventDefault();
                    const password = document.getElementById('admin-password-input').value;
                    const result = await window.api.validateAdminPassword(password);
                    if (result.success) {
                        closeAdminPasswordModal();
                        await window.api.openUsersWindow();
                        adminForm.removeEventListener('submit', submitHandler);
                    } else {
                        document.getElementById('admin-password-error').classList.remove('hidden');
                    }
                };
                adminForm.addEventListener('submit', submitHandler);
            }
        }

        if (e.key === 'F8') {
            e.preventDefault();
            if (state.currentPage === 'history-page') {
                if (state.selectedSales.size === 1) {
                    const saleIdToPrint = state.selectedSales.values().next().value;
                    printReceipt(saleIdToPrint);
                } else if (state.selectedSales.size > 1) {
                    showNotification("Please select only one receipt to print.", "info");
                } else {
                    showNotification("Please select a receipt to print.", "info");
                }
            }
        }

        if (e.key === 'F3') {
            if (state.currentPage === 'selling-page') {
                e.preventDefault();
                createNewReceipt();
            }
        }

        if (e.key === 'F9' || e.key === 'F10') {
            if (state.currentPage === 'selling-page') {
                e.preventDefault();
                const method = e.key === 'F9' ? 'cash' : 'card'; // Assuming F9 for cash, F10 for card
                await handleShortcutSale(method);
            }
        }
    });

    document.querySelector('header').addEventListener('click', (e) => {
        const navLink = e.target.closest('.nav-link');

        if (navLink) {
            if (navLink.id === 'admin-mode-btn') {
                if (state.isAdminMode) {
                    state.isAdminMode = false;
                    render();
                } else {
                    showAdminPasswordModal();
                }
            } else if (navLink.id === 'lang-switcher') {
                state.lang = state.lang === 'en' ? 'ar' : 'en';
                render();
            }
            else {
                state.currentPage = navLink.dataset.page;
                render();
            }
        }

        if (e.target.closest('#home-btn')) { state.currentPage = 'home-page'; render(); }

        const logoutBtn = e.target.closest('#logout-btn');
        if (logoutBtn) {
            logoutBtn.classList.add('closing');
            setTimeout(() => {
                window.api.logout();
            }, 300);
        }
    });

    document.addEventListener('click', async (e) => {
        if (e.target.id === 'export-customers-btn') {
            exportCustomersToExcel();
        }
        if (e.target.id === 'export-salaries-btn') {
            exportSalariesToExcel();
        }
        // New: Export Returns to PDF button handler
        if (e.target.id === 'export-returns-pdf-btn') {
            await exportReturnsToPDF();
        }


        if (e.target.closest('.payment-method-btn')) {
            const currentReceiptContent = e.target.closest('[id^="receipt-content-"]');
            if (currentReceiptContent) {
                currentReceiptContent.querySelectorAll('.payment-method-btn').forEach(btn => btn.classList.remove('selected'));
                e.target.closest('.payment-method-btn').classList.add('selected');
            }
        }

        if (e.target.closest('#receipt-selection-buttons')) {
            const button = e.target.closest('button');
            if (button) {
                const receiptId = button.dataset.receiptId;
                const itemData = state.itemToAdd;

                addToCart(itemData, receiptId);
                state.currentPage = 'selling-page';
                state.activeReceiptId = receiptId;

                closeReceiptSelectionModal();
                render();
            }
        }
        if (e.target.id === 'cancel-receipt-selection-btn') {
            closeReceiptSelectionModal();
        }


        if (e.target.id === 'add-product-btn') showProductModal();
        if (e.target.id === 'cancel-product-modal-btn') closeProductModal();
        if (e.target.id === 'close-barcode-modal-btn') closeBarcodeModal();
        if (e.target.id === 'manage-categories-btn') showCategoryModal();
        if (e.target.id === 'close-category-modal-btn') closeCategoryModal();
        if (e.target.id === 'add-category-btn') await handleAddCategory();
        if (e.target.classList.contains('delete-category-btn')) await handleDeleteCategory(e.target.dataset.category);
        if (e.target.id === 'add-receipt-btn') createNewReceipt();

        if (e.target.closest('.receipt-tab')) {
            const tab = e.target.closest('.receipt-tab');
            if (tab.dataset.receiptId) {
                const receiptId = tab.dataset.receiptId;
                if (e.target.classList.contains('close-receipt-btn')) {
                    closeReceipt(receiptId);
                } else {
                    switchReceipt(receiptId);
                }
            } else if (tab.dataset.bookingId) {
                const bookingId = tab.dataset.bookingId;
                if (e.target.classList.contains('close-booking-btn')) {
                    // closeBooking(bookingId); // This function does not exist
                }
            }
        }

        if (e.target.classList.contains('edit-product-btn')) {
            const p = state.products.find(p => p.id === e.target.dataset.id);
            if (p) showProductModal(p);
        }
        if (e.target.classList.contains('delete-product-btn')) {
            if (confirm('Are you sure you want to delete this product?')) {
                state.products = state.products.filter(p => p.id !== e.target.dataset.id);
                await saveData();
                render();
            }
        }
        if (e.target.classList.contains('show-barcodes-btn')) {
            showBarcodeModal(e.target.dataset.id);
        }
        if (e.target.classList.contains('print-size-barcode-btn')) {
            const { productId, color, size } = e.target.dataset;
            const product = state.products.find(p => p.id === productId);
            if (product && product.colors[color] && product.colors[color].sizes[size]) {
                const barcode = product.colors[color].sizes[size].barcode;
                printBarcode(barcode, product.name, color, size, product.sellingPrice);
            }
        }
        if (e.target.classList.contains('category-tab')) { state.activeCategory = e.target.dataset.category; render(); }

        if (e.target.classList.contains('color-swatch')) {
            const card = e.target.closest('.product-card');
            if (!card) return;

            card.querySelectorAll('.color-swatch').forEach(swatch => swatch.classList.remove('active'));
            e.target.classList.add('active');

            const productId = card.querySelector('[data-product-id]').dataset.productId;
            const selectedColor = e.target.dataset.color;
            const product = state.products.find(p => p.id === productId);
            const sizeSelector = card.querySelector('.gallery-size-selector');

            if (product && product.colors[selectedColor]) {
                const availableSizes = Object.keys(product.colors[selectedColor].sizes).filter(s => product.colors[selectedColor].sizes[s].quantity > 0);
                sizeSelector.innerHTML = availableSizes.map(s => `<option value="${s}">${s}</option>`).join('') || '<option>N/A</option>';
                sizeSelector.disabled = availableSizes.length === 0;
            }
        }

        if (e.target.classList.contains('add-gallery-to-cart-btn')) {
            const container = e.target.closest('[data-product-id]');
            const productId = container.dataset.productId;
            const activeColorSwatch = container.querySelector('.color-swatch.active');
            const color = activeColorSwatch ? activeColorSwatch.dataset.color : null;
            const size = container.querySelector('.gallery-size-selector').value;
            const quantity = parseInt(container.querySelector('.quantity-input').value, 10);

            if (!color) {
                showNotification("Please select a color.", "error");
                return;
            }

            addToCartHandler({ productId, color, size, quantity }, e.target);
        }
        if (e.target.classList.contains('add-to-cart-btn')) {
            const targetCart = e.target.dataset.targetCart;
            const container = e.target.closest('[id$="-content"]');
            const productId = container.querySelector('.product-selection').value;
            if (productId) {
                const product = state.products.find(p => p.id === productId);
                const itemData = {
                    productId: product.id,
                    productName: product.name,
                    quantity: parseInt(container.querySelector('.sale-quantity').value, 10),
                    price: parseFloat(container.querySelector('.sale-price')?.value || product.sellingPrice),
                    color: container.querySelector('.sale-color').value,
                    size: container.querySelector('.sale-size').value,
                    purchasePrice: product.purchasePrice
                };
                if (targetCart === 'booking') {
                    handleAddToBookingCart(itemData, e.target);
                } else {
                    addToCart(itemData, state.activeReceiptId, e.target);
                }
            }
        }

        if (e.target.classList.contains('remove-from-cart-btn')) {
            const targetCart = e.target.dataset.targetCart;
            const itemIndex = parseInt(e.target.dataset.index, 10);

            if (targetCart === 'booking') {
                const bookingId = e.target.dataset.bookingId;
                const booking = state.bookings.find(b => b.id === bookingId);
                if (booking && booking.cart[itemIndex]) {
                    const item = booking.cart[itemIndex];
                    const product = state.products.find(p => p.id === item.productId);
                    if (product && product.colors[item.color] && product.colors[item.color].sizes[item.size]) {
                        product.colors[item.color].sizes[item.size].quantity += item.quantity;
                    }
                    booking.cart.splice(itemIndex, 1);
                    renderBookingPage(); // Re-render the booking page to update stock display
                }
            } else { // 'receipt'
                const receiptId = e.target.dataset.receiptId;
                const receipt = state.receipts.find(r => r.id === receiptId);
                if (receipt && receipt.cart[itemIndex]) {
                    const item = receipt.cart[itemIndex];
                    const product = state.products.find(p => p.id === item.productId);
                    if (product && product.colors[item.color] && product.colors[item.color].sizes[item.size]) {
                        product.colors[item.color].sizes[item.size].quantity += item.quantity;
                    }
                    receipt.cart.splice(itemIndex, 1);
                    cartSession.save();
                    render();
                }
            }
        }

        if (e.target.classList.contains('complete-sale-btn')) {
            await completeSale();
        }

        if (e.target.classList.contains('complete-sale-from-booking-btn')) {
            await completeSaleFromBooking(e.target.dataset.bookingId);
        }

        if (e.target.matches('.return-sale-btn')) showReturnModal(e.target.dataset.saleId);
        if (e.target.matches('.print-receipt-btn')) await printReceipt(e.target.dataset.saleId);
        if (e.target.id === 'delete-selected-btn') await deleteSelectedSales();
        if (e.target.id === 'cancel-return-btn') closeReturnModal();
        if (e.target.id === 'confirm-return-btn') await confirmReturn();
        if (e.target.id === 'export-pdf-btn') await exportReportToPDF();
        if (e.target.id === 'manage-users-btn') window.api.openUsersWindow();
        if (e.target.id === 'export-inventory-btn') await exportInventoryToPDF();
        // Removed calculate-shift-btn handler as per request
        // if (e.target.id === 'calculate-shift-btn') await generateShiftReport();

        if (e.target.classList.contains('remove-image-preview-btn')) {
            e.target.parentElement.remove();
        }

        // Booking specific buttons
        if (e.target.classList.contains('delete-booking-btn')) {
            const bookingId = e.target.dataset.bookingId;
            if (confirm('Are you sure you want to delete this booking? This will restore the stock.')) {
                deleteBooking(bookingId);
            }
        }
        if (e.target.classList.contains('save-as-booking-btn')) {
            const activeReceipt = state.receipts.find(r => r.id === state.activeReceiptId);
            if (activeReceipt && activeReceipt.cart.length > 0) {
                showBookingConfirmationModal(state.activeReceiptId);
            } else {
                showNotification("Cart is empty.", "info");
            }
        }
        if (e.target.classList.contains('print-booking-btn')) {
            const bookingId = e.target.dataset.bookingId;
            await printBooking(bookingId);
        }
        // Make the entire button clickable for edit-booking-btn
        if (e.target.closest('.edit-booking-btn')) {
            const bookingId = e.target.closest('.edit-booking-btn').dataset.bookingId;
            showEditBookingModal(bookingId);
        }

    });

    document.addEventListener('change', (e) => {
        if (e.target.id === 'time-filter-type') {
            document.getElementById('month-filter-container').classList.toggle('hidden', e.target.value !== 'month');
            document.getElementById('day-filter-container').classList.toggle('hidden', e.target.value !== 'day');
            generateReport();
        }

        if (e.target.id === 'free-delivery-checkbox') {
            const container = e.target.closest('[id^="receipt-content-"]');
            if (container) {
                const deliveryFeeContainer = container.querySelector('#delivery-fee-container');
                deliveryFeeContainer.classList.toggle('hidden', e.target.checked);
                if (e.target.checked) {
                    container.querySelector('.delivery-fee-input').value = '';
                }
                renderCart(state.activeReceiptId);
            }
        }

        if (e.target.classList.contains('product-selection')) {
            const container = e.target.closest('[id$="-content"]');
            handleProductSelectionChange(e.target.value, container);
        }
        if (e.target.classList.contains('sale-color')) {
            const container = e.target.closest('[id$="-content"]');
            handleSaleColorChange(container);
        }

        if (e.target.id === 'select-all-checkbox') toggleSelectAllSales(e.target.checked);
        if (e.target.classList.contains('sale-checkbox')) handleSaleCheckboxChange(e.target.dataset.saleId, e.target.checked);

        if (e.target.classList.contains('receipt-seller-select')) {
            const activeReceipt = state.receipts.find(r => r.id === state.activeReceiptId);
            if (activeReceipt) {
                activeReceipt.seller = e.target.value;
                cartSession.save();
            }
        }

        if (e.target.id === 'product-images') {
            const imagePreviewsContainer = document.getElementById('image-previews-container');
            const files = e.target.files;
            for (const file of files) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const previewWrapper = document.createElement('div');
                    previewWrapper.className = 'relative';
                    previewWrapper.innerHTML = `
                        <img src="${event.target.result}" class="w-full h-auto object-cover rounded-lg new-preview" style="aspect-ratio: 3/2;">
                        <button type="button" class="remove-image-preview-btn absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">&times;</button>
                    `;
                    imagePreviewsContainer.appendChild(previewWrapper);
                };
                reader.readAsDataURL(file);
            }
        }
    });

    const productModal = document.getElementById('product-modal');
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target.id === 'add-color-btn') {
                document.getElementById('color-container').appendChild(createColorEntry());
            }
            if (e.target.classList.contains('remove-color-btn')) {
                e.target.closest('.color-entry').remove();
            }
            if (e.target.classList.contains('add-size-btn')) {
                const sizesContainer = e.target.previousElementSibling;
                sizesContainer.appendChild(createSizeEntry());
            }
            if (e.target.classList.contains('remove-size-btn')) {
                e.target.closest('.size-entry').remove();
            }
        });
    }

    const adminPasswordForm = document.getElementById('admin-password-form');
    if (adminPasswordForm) {
        adminPasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const password = document.getElementById('admin-password-input').value;
            const result = await window.api.validateAdminPassword(password);

            if (result.success) {
                state.isAdminMode = true;
                closeAdminPasswordModal();
                render();
            } else {
                document.getElementById('admin-password-error').classList.remove('hidden');
            }
        });
    }

    const cancelAdminBtn = document.getElementById('cancel-admin-password-btn');
    if (cancelAdminBtn) cancelAdminBtn.addEventListener('click', closeAdminPasswordModal);

    const bookingConfirmationForm = document.getElementById('booking-confirmation-form');
    if (bookingConfirmationForm) {
        bookingConfirmationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const deposit = parseFloat(document.getElementById('booking-deposit-input').value) || 0;
            await saveReceiptAsBooking(state.activeReceiptId, deposit);
        });
    }

    const cancelBookingBtn = document.getElementById('cancel-booking-confirmation-btn');
    if (cancelBookingBtn) cancelBookingBtn.addEventListener('click', closeBookingConfirmationModal);
}

// --- CART & SALE LOGIC ---

function updateCartIconCount() {
    const totalItems = state.receipts.reduce((sum, r) => sum + r.cart.reduce((itemSum, item) => itemSum + item.quantity, 0), 0);
    const cartCountEl = document.getElementById('cart-item-count');
    cartCountEl.textContent = totalItems;
    cartCountEl.classList.toggle('hidden', totalItems === 0);
}

/**
 * =================================================================
 * تعديل: إضافة بيانات العميل للفاتورة الجديدة
 * =================================================================
 * * تم إضافة حقول جديدة لكائن الفاتورة لحفظ بيانات العميل
 * مباشرة عند إنشاء الفاتورة.
 */
function createNewReceipt(doRender = true) {
    if (state.receipts.length >= 30) {
        showNotification("Maximum of 30 receipts reached.", "info");
        return;
    }
    const newReceipt = {
        id: generateUUID(),
        cart: [],
        seller: state.currentUser.username,
        isFromBooking: false,
        originalDeposit: 0,
        depositPaymentMethod: '',
        // إضافة حقول جديدة لحفظ بيانات العميل مع الفاتورة
        customerName: '',
        customerPhone: '',
        customerAddress: '',
        customerCity: '',
    };
    state.receipts.push(newReceipt);
    state.activeReceiptId = newReceipt.id;
    cartSession.save();
    if (doRender) {
        render();
    }
}

function switchReceipt(receiptId) {
    state.activeReceiptId = receiptId;
    render();
}

function closeReceipt(receiptIdToClose) {
    if (state.receipts.length <= 1) return;
    const index = state.receipts.findIndex(r => r.id === receiptIdToClose);
    if (index > -1) {
        const receiptToClose = state.receipts[index];
        receiptToClose.cart.forEach(item => {
            const product = state.products.find(p => p.id === item.productId);
            if (product && product.colors[item.color] && product.colors[item.color].sizes[item.size]) {
                product.colors[item.color].sizes[item.size].quantity += item.quantity;
            }
        });

        state.receipts.splice(index, 1);
        if (state.activeReceiptId === receiptIdToClose) {
            state.activeReceiptId = state.receipts[0]?.id || null;
        }
        cartSession.save();
        render();
    }
}

function handleBarcodeScan(barcode) {
    const cleanScannedBarcode = String(barcode).trim().toLowerCase();
    if (!cleanScannedBarcode) return;

    for (const product of state.products) {
        if (product.colors) {
            for (const [colorName, colorData] of Object.entries(product.colors)) {
                if (colorData.sizes) {
                    for (const [sizeName, sizeData] of Object.entries(colorData.sizes)) {
                        const cleanDbBarcode = String(sizeData.barcode || '').trim().toLowerCase();

                        if (cleanDbBarcode && cleanDbBarcode === cleanScannedBarcode) {
                            if (sizeData.quantity > 0) {
                                addToCartHandler({
                                    productId: product.id,
                                    color: colorName,
                                    size: sizeName,
                                    quantity: 1
                                });
                                showNotification(`Added: ${product.name} (${colorName}/${sizeName})`, 'success');
                            } else {
                                showNotification(`'${product.name} (${colorName}/${sizeName})' is out of stock.`, 'error');
                            }
                            return;
                        }
                    }
                }
            }
        }
    }

    showNotification("Barcode not found.", 'error');
}

function addToCartHandler(itemData, buttonElement = null) {
    if (state.currentPage === 'selling-page') {
        addToCart(itemData, state.activeReceiptId, buttonElement);
    } else {
        if (state.receipts.length === 1) {
            addToCart(itemData, state.receipts[0].id, buttonElement);
            showNotification('Item added to the open receipt.', 'success');
        } else {
            showReceiptSelectionModal(itemData);
        }
    }
}

function handleAddToBookingCart(itemData, buttonElement = null) {
    const { productId, color, size, quantity } = itemData;
    const activeBooking = state.bookings.find(b => b.id === state.activeBookingId);
    if (!activeBooking) return;

    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const availableQty = product.colors[color]?.sizes[size]?.quantity || 0;
    if (quantity > availableQty) {
        showNotification(`Not enough stock for ${product.name} (${color}/${size}). Only ${availableQty} available.`, 'error');
        return;
    }

    if (quantity > 0) {
        const existingCartItemIndex = activeBooking.cart.findIndex(item => item.productId === productId && item.color === color && item.size === size);
        if (existingCartItemIndex > -1) {
            activeBooking.cart[existingCartItemIndex].quantity += quantity;
        } else {
            activeBooking.cart.push(itemData);
        }

        product.colors[color].sizes[size].quantity -= quantity;
        renderBookingPage(); // Re-render the booking page to update stock display

        if (buttonElement) {
            // UI feedback for the button
        }
    }
}

/**
 * =================================================================
 * تعديل: عدم حذف بيانات المنتج بعد إضافته للسلة
 * =================================================================
 * * تم حذف الجزء الأخير من هذه الدالة الذي كان يقوم بتفريغ
 * حقول اختيار المنتج واللون والمقاس بعد إضافة المنتج للسلة.
 */
function addToCart(itemData, receiptId, buttonElement = null) {
    const { productId, color, size, quantity } = itemData;

    const receipt = state.receipts.find(r => r.id === receiptId);
    if (!receipt) return;

    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const activeReceiptContent = document.getElementById(`receipt-content-${receiptId}`);
    const selectedColor = color || activeReceiptContent?.querySelector('.sale-color')?.value;
    const selectedSize = size || activeReceiptContent?.querySelector('.sale-size')?.value;
    const qty = quantity || parseInt(activeReceiptContent?.querySelector('.sale-quantity')?.value, 10);
    const price = parseFloat(activeReceiptContent?.querySelector('.sale-price')?.value) || product.sellingPrice; // Get price from input

    if (!selectedColor || !selectedSize) {
        showNotification("Please select a color and size.", "error");
        return;
    }

    const availableQty = product.colors[selectedColor]?.sizes[selectedSize]?.quantity || 0;
    if (qty > availableQty) {
        showNotification(`Not enough stock for ${product.name} (${selectedColor}/${selectedSize}). Only ${availableQty} available.`, 'error');
        return;
    }

    if (qty > 0) {
        const existingCartItemIndex = receipt.cart.findIndex(item => item.productId === productId && item.color === selectedColor && item.size === selectedSize);
        if (existingCartItemIndex > -1) {
            receipt.cart[existingCartItemIndex].quantity += qty;
        } else {
            receipt.cart.push({
                productId: product.id,
                productName: product.name,
                quantity: qty,
                price,
                color: selectedColor,
                size: selectedSize,
                purchasePrice: product.purchasePrice
            });
        }

        product.colors[selectedColor].sizes[selectedSize].quantity -= qty;

        cartSession.save();
        render(); // Re-render to update cart and icon count

        if (buttonElement) {
            const originalText = buttonElement.textContent;
            buttonElement.classList.add('added');
            buttonElement.textContent = translations[state.lang].addedToCart;
            setTimeout(() => {
                buttonElement.classList.remove('added');
                buttonElement.textContent = originalText;
            }, 1500);
        }
    }
}

async function completeSale() {
    const activeReceipt = state.receipts.find(r => r.id === state.activeReceiptId);
    if (!activeReceipt || activeReceipt.cart.length === 0) {
        showNotification("Cart is empty.", "info");
        return;
    };

    const container = document.getElementById(`receipt-content-${state.activeReceiptId}`);
    if (!container) return;

    // استخدام البيانات المحفوظة في الفاتورة مباشرة
    const { customerPhone, customerName, customerAddress, customerCity } = activeReceipt;

    const isFreeDelivery = container.querySelector('#free-delivery-checkbox').checked;
    const deliveryFee = isFreeDelivery ? 0 : parseFloat(container.querySelector('.delivery-fee-input').value) || 0;


    try {
        const subtotal = activeReceipt.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discountPercent = parseFloat(container.querySelector('.discount-percentage').value) || 0;
        const discountAmount = parseFloat(container.querySelector('.discount-amount').value) || 0;

        let calculatedDiscount = 0;
        if (discountPercent > 0) {
            calculatedDiscount = subtotal * (discountPercent / 100);
        } else if (discountAmount > 0) {
            calculatedDiscount = discountAmount;
        }
        calculatedDiscount = Math.min(calculatedDiscount, subtotal); // Ensure discount doesn't exceed subtotal

        const totalBeforeDepositAndPaid = subtotal - calculatedDiscount + deliveryFee;

        const paidAmountAtTransaction = parseFloat(container.querySelector('.paid-amount').value) || 0;
        if (isNaN(paidAmountAtTransaction) || paidAmountAtTransaction < 0) {
            showNotification("Invalid paid amount.", "error");
            return;
        }

        const paymentMethod = container.querySelector('.payment-method-btn.selected').dataset.method;

        const newSale = {
            id: getDailyId('S', state.sales),
            cashier: activeReceipt.seller || (state.currentUser ? state.currentUser.username : 'N/A'),
            createdAt: new Date().toISOString(),
            totalAmount: totalBeforeDepositAndPaid, // This is the true total before any previous deposit
            paidAmount: paidAmountAtTransaction, // Amount paid in THIS transaction
            depositPaidOnBooking: activeReceipt.originalDeposit || 0, // Deposit from a previous booking
            profit: activeReceipt.cart.reduce((sum, item) => sum + (item.price - item.purchasePrice) * item.quantity, 0) - calculatedDiscount, // Profit calculation
            discountAmount: calculatedDiscount,
            subtotal,
            paymentMethod: paymentMethod,
            customerPhone: customerPhone,
            customerName: customerName,
            customerAddress: customerAddress,
            customerCity: customerCity,
            isFreeDelivery: isFreeDelivery,
            deliveryFee: deliveryFee,
            items: activeReceipt.cart.map(item => ({
                id: generateUUID(),
                productId: item.productId,
                productName: item.productName,
                quantity: item.quantity,
                unitPrice: item.price,
                purchasePrice: item.purchasePrice,
                color: item.color,
                size: item.size,
                returnedQty: 0
            }))
        };

        state.sales.unshift(newSale);
        updateCustomerData(customerPhone, customerName, customerAddress, customerCity, newSale.items);

        showNotification(`Sale #${newSale.id} completed!`, 'success');

        const receiptIdToClose = state.activeReceiptId;
        const index = state.receipts.findIndex(r => r.id === receiptIdToClose);

        state.receipts.splice(index, 1);

        if (state.receipts.length === 0) {
            state.activeReceiptId = null;
            createNewReceipt();
        } else {
            state.activeReceiptId = state.receipts[Math.max(0, index - 1)]?.id || state.receipts[0]?.id;
            render();
        }
        cartSession.save();

        await saveData();
        await printReceipt(newSale.id);

    } catch (error) {
        console.error("Error completing sale:", error);
        showNotification("An error occurred while completing the sale.", "error");
    }
}

function updateCustomerData(phone, name, address, city, items) {
    if (!phone || !name) return;

    let customer = state.customers.find(c => c.phone === phone);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    if (customer) {
        customer.name = name;
        customer.address = address;
        customer.city = city;
        customer.totalItemsBought += totalItems;
        customer.lastPaymentDate = new Date().toISOString();
    } else {
        customer = {
            id: generateUUID(),
            phone,
            name,
            address,
            city,
            totalItemsBought: totalItems,
            lastPaymentDate: new Date().toISOString()
        };
        state.customers.push(customer);
    }
}

async function handleShortcutSale(paymentMethod) {
    const activeReceipt = state.receipts.find(r => r.id === state.activeReceiptId);
    if (!activeReceipt || activeReceipt.cart.length === 0) {
        showNotification(translations[state.lang].cartIsEmpty || "Cart is empty.", "info");
        return;
    }

    const container = document.getElementById(`receipt-content-${state.activeReceiptId}`);
    if (!container) return;

    container.querySelectorAll('.payment-method-btn').forEach(btn => btn.classList.remove('selected'));
    const methodBtn = container.querySelector(`.payment-method-btn[data-method="${paymentMethod}"]`);
    if (methodBtn) methodBtn.classList.add('selected');

    const totalText = container.querySelector('.cart-total').textContent;
    const totalAmount = parseFloat(totalText) || 0;
    container.querySelector('.paid-amount').value = totalAmount.toFixed(2);

    await completeSale();
}

async function handleProductFormSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('product-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const productCodeInput = document.getElementById('product-code');
    const productCode = productCodeInput.value.trim();

    if (productCode) {
        const isDuplicate = state.products.some(
            p => p.code && p.code.toLowerCase() === productCode.toLowerCase() && p.id !== state.editingProductId
        );

        if (isDuplicate) {
            showNotification(`Product code "${productCode}" already exists. Please use a unique code.`, 'error');
            productCodeInput.focus();
            productCodeInput.classList.add('border-2', 'border-red-500');
            return;
        }
    }
    productCodeInput.classList.remove('border-2', 'border-red-500');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Saving...';

    const mainBarcode = document.getElementById('main-barcode').value.trim();

    const existingImages = Array.from(document.querySelectorAll('#image-previews-container img:not(.new-preview)'))
        .map(img => img.src);

    const processNewImages = async () => {
        const imageFiles = document.getElementById('product-images').files;
        const newImagePromises = Array.from(imageFiles).map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });
        return Promise.all(newImagePromises);
    };

    try {
        const newImages = await processNewImages();
        const allImages = [...existingImages, ...newImages];

        const newCategory = document.getElementById('product-category').value.trim();
        if (newCategory && !state.categories.includes(newCategory)) {
            state.categories.push(newCategory);
            state.categories.sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
        }

        const productData = {
            name: document.getElementById('product-name').value,
            category: newCategory,
            code: productCode,
            mainBarcode: mainBarcode,
            purchasePrice: parseFloat(document.getElementById('purchase-price').value),
            sellingPrice: parseFloat(document.getElementById('selling-price').value),
            images: allImages,
            colors: {}
        };

        document.querySelectorAll('#color-container .color-entry').forEach((colorEntry, colorIndex) => {
            const colorName = colorEntry.querySelector('.color-name-input').value.trim();
            if (colorName) {
                const colorData = { sizes: {} };
                const colorCode = String(colorIndex + 1).padStart(2, '0');

                colorEntry.querySelectorAll('.size-entry').forEach(sizeEntry => {
                    const size = sizeEntry.querySelector('.size-name-input').value.trim().toUpperCase();
                    const quantity = parseInt(sizeEntry.querySelector('.size-quantity-input').value, 10);
                    if (size && !isNaN(quantity)) {
                        const generatedBarcode = `${mainBarcode}${colorCode}${size}`;
                        colorData.sizes[size] = {
                            quantity: quantity,
                            barcode: generatedBarcode
                        };
                    }
                });
                productData.colors[colorName] = colorData;
            }
        });

        if (state.editingProductId) {
            const index = state.products.findIndex(p => p.id === state.editingProductId);
            state.products[index] = { ...state.products[index], ...productData, updatedAt: new Date().toISOString() };
        } else {
            productData.id = generateUUID();
            productData.createdAt = new Date().toISOString();
            state.products.unshift(productData);
        }

        await saveData();
        closeProductModal();
        if (state.currentPage === 'inventory-page') renderInventoryTable();
        if (state.currentPage === 'home-page') renderProductGallery();

        showNotification(`Product "${productData.name}" saved successfully!`, 'success');

    } catch (error) {
        console.error("Error processing product data:", error);
        submitBtn.disabled = false;
        submitBtn.textContent = translations[state.lang].btnSave;
        showNotification("Error saving product.", "error");
    }
}

function handleSaleColorChange(container) {
    if (!container) return;

    const productId = container.querySelector('.product-selection').value;
    const color = container.querySelector('.sale-color').value;
    const sizeSelect = container.querySelector('.sale-size');
    const product = state.products.find(p => p.id === productId);

    if (product && product.colors[color]) {
        sizeSelect.innerHTML = Object.entries(product.colors[color].sizes || {})
            .filter(([_, sizeData]) => sizeData.quantity > 0)
            .map(([size, sizeData]) => `<option value="${size}">${size} (Stock: ${sizeData.quantity})</option>`)
            .join('');
        sizeSelect.disabled = sizeSelect.options.length === 0;
    } else {
        sizeSelect.innerHTML = '';
        sizeSelect.disabled = true;
    }
}

function handleProductSelectionChange(productId, container) {
    if (!container) return;

    const productDetailsDiv = container.querySelector('.product-details-for-sale');
    const colorSelect = container.querySelector('.sale-color');

    if (productId) {
        const product = state.products.find(p => p.id === productId);
        if (container.querySelector('.sale-price')) {
            container.querySelector('.sale-price').value = product.sellingPrice;
        }

        const availableColors = Object.entries(product.colors || {})
            .filter(([_, colorData]) => {
                return Object.values(colorData.sizes || {}).some(size => size.quantity > 0);
            }).map(([colorName, _]) => colorName);


        colorSelect.innerHTML = availableColors
            .map(color => `<option value="${color}">${color}</option>`)
            .join('');

        if (availableColors.length > 0) {
            handleSaleColorChange(container);
            productDetailsDiv.classList.remove('hidden');
        } else {
            productDetailsDiv.classList.add('hidden');
        }

    } else {
        productDetailsDiv.classList.add('hidden');
    }
}

function toggleSelectAllSales(isChecked) {
    const saleCheckboxes = document.querySelectorAll('#sales-history-list .sale-checkbox');
    saleCheckboxes.forEach(cb => {
        cb.checked = isChecked;
        handleSaleCheckboxChange(cb.dataset.saleId, isChecked);
    });
}

function handleSaleCheckboxChange(saleId, isChecked) {
    if (isChecked) state.selectedSales.add(saleId);
    else state.selectedSales.delete(saleId);
    document.getElementById('delete-selected-btn').classList.toggle('hidden', state.selectedSales.size === 0);
    const allCheckboxes = document.querySelectorAll('#sales-history-list .sale-checkbox');
    document.getElementById('select-all-checkbox').checked = allCheckboxes.length > 0 && state.selectedSales.size === allCheckboxes.length;
}

async function deleteSelectedSales() {
    if (state.selectedSales.size === 0) return;
    if (confirm(`Are you sure you want to delete ${state.selectedSales.size} receipts? This will restore product stock.`)) {
        state.selectedSales.forEach(saleId => {
            const saleToDelete = state.sales.find(s => s.id === saleId);
            if (saleToDelete) {
                let netItemsSold = 0;
                (saleToDelete.items || []).forEach(item => {
                    const effectiveQty = item.quantity - (item.returnedQty || 0);
                    netItemsSold += effectiveQty;
                    if (effectiveQty > 0) {
                        const product = state.products.find(p => p.id === item.productId);
                        if (product && product.colors[item.color] && product.colors[item.color].sizes[item.size]) {
                            product.colors[item.color].sizes[item.size].quantity += effectiveQty;
                        }
                    }
                });

                if (saleToDelete.customerPhone && netItemsSold > 0) {
                    const customer = state.customers.find(c => c.phone === saleToDelete.customerPhone);
                    if (customer) {
                        customer.totalItemsBought = Math.max(0, customer.totalItemsBought - netItemsSold);
                    }
                }
            }
        });

        state.sales = state.sales.filter(s => !state.selectedSales.has(s.id));
        const numDeleted = state.selectedSales.size;
        state.selectedSales.clear();
        await saveData();
        render();
        showNotification(`${numDeleted} sale(s) deleted and stock/customer data restored.`, 'success');
    }
}

function updateCustomerOnReturn(phone, returnedQuantity) {
    if (!phone || !returnedQuantity) return;
    const customer = state.customers.find(c => c.phone === phone);
    if (customer) {
        customer.totalItemsBought = Math.max(0, customer.totalItemsBought - returnedQuantity);
    }
}

async function confirmReturn() {
    const confirmBtn = document.getElementById('confirm-return-btn');
    const originalBtnText = confirmBtn.textContent;
    confirmBtn.disabled = true;
    confirmBtn.textContent = translations[state.lang].processing || 'Processing...';

    const sale = state.sales.find(s => s.id === state.returningSaleId);
    if (!sale) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = originalBtnText;
        return;
    }

    let itemsReturnedCount = 0;
    let totalReturnedQty = 0;

    document.querySelectorAll('.return-quantity-input').forEach(input => {
        const returnQuantity = parseInt(input.value);
        if (returnQuantity > 0) {
            itemsReturnedCount++;
            totalReturnedQty += returnQuantity;
            const { itemId, productId, color, size } = input.dataset;
            const saleItem = sale.items.find(i => i.id === itemId);
            const product = state.products.find(p => p.id === productId);

            saleItem.returnedQty = (saleItem.returnedQty || 0) + returnQuantity;

            const itemSubtotal = saleItem.unitPrice * returnQuantity;
            const discountRatio = sale.subtotal > 0 ? sale.discountAmount / sale.subtotal : 0;
            const returnedValue = itemSubtotal - (itemSubtotal * discountRatio);
            const returnedProfit = (saleItem.unitPrice - saleItem.purchasePrice) * returnQuantity - (itemSubtotal * discountRatio);

            sale.totalAmount -= returnedValue;
            sale.profit -= returnedProfit;

            if (product && product.colors[color] && product.colors[color].sizes[size]) {
                product.colors[color].sizes[size].quantity += returnQuantity;
            }
        }
    });

    if (itemsReturnedCount > 0) {
        if (sale.customerPhone) {
            updateCustomerOnReturn(sale.customerPhone, totalReturnedQty);
        }
        await saveData();
        showNotification(translations[state.lang].btnReturned || "Return processed successfully. Stock updated.", 'success');
    }

    confirmBtn.disabled = false;
    confirmBtn.textContent = originalBtnText;

    closeReturnModal();
    render();
}

async function printReceipt(saleId) {
    try {
        const sale = state.sales.find(s => s.id === saleId);
        if (!sale) {
            showNotification(`Receipt with ID ${saleId} not found.`, 'error');
            return;
        }

        const receiptData = await window.api.loadReceiptTemplate();
        if (!receiptData || receiptData.error) {
            console.error("Failed to load receipt template:", receiptData.error);
            showNotification("Error: Could not load receipt template.", 'error');
            return;
        }

        let { template, logoBase64 } = receiptData;

        const hasReturns = sale.items.some(item => (item.returnedQty || 0) > 0);
        let itemsHtml = sale.items.map(item => `<tr><td>${item.productName} (${item.color}/${item.size})</td><td>${item.quantity}</td><td>${item.unitPrice.toFixed(2)}</td><td>${(item.unitPrice * item.quantity).toFixed(2)}</td></tr>`).join('');

        let returnsSectionHtml = '';
        let totalReturnsValue = 0;
        let displayPaidAmount = sale.paidAmount.toFixed(2);
        let displayChangeAmount = (sale.paidAmount - (sale.totalAmount - (sale.depositPaidOnBooking || 0))).toFixed(2); // Change based on totalAmount - depositPaidOnBooking

        let customerInfoHtml = '';
        if (sale.customerName) {
            customerInfoHtml = `
                <div class="customer-info">
                    <p><strong>Customer:</strong> ${sale.customerName}</p>
                    ${sale.customerPhone ? `<p><strong>Phone:</strong> ${sale.customerPhone}</p>` : ''}
                    ${sale.customerAddress ? `<p><strong>Address:</strong> ${sale.customerAddress}</p>` : ''}
                    ${sale.customerCity ? `<p><strong>City:</strong> ${sale.customerCity}</p>` : ''}
                </div>
            `;
        }


        if (hasReturns) {
            let returnedItemsHtml = '';
            let totalReturnedRawValue = 0;
            sale.items.forEach(item => {
                if ((item.returnedQty || 0) > 0) {
                    const returnedValue = item.unitPrice * item.returnedQty;
                    totalReturnedRawValue += returnedValue;
                    returnedItemsHtml += `<tr><td>${item.productName} (${item.color}/${item.size})</td><td>${item.returnedQty}</td><td>${item.unitPrice.toFixed(2)}</td><td>${returnedValue.toFixed(2)}</td></tr>`;
                }
            });
            const discountRatio = sale.subtotal > 0 ? sale.discountAmount / sale.subtotal : 0;
            totalReturnsValue = totalReturnedRawValue - (totalReturnedRawValue * discountRatio);
            returnsSectionHtml = `<h2>المرتجعات / Returns</h2><table><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>${returnedItemsHtml}</tbody></table>`;

            displayPaidAmount = '0.00';
            displayChangeAmount = totalReturnsValue.toFixed(2);
        }

        // Determine the total display based on whether a deposit was paid on a booking
        let finalTotalDisplayHtml;
        if (sale.depositPaidOnBooking > 0) {
            const amountRemaining = sale.totalAmount - sale.depositPaidOnBooking;
            finalTotalDisplayHtml = `
                <p><strong>${translations[state.lang].total}:</strong> ${sale.totalAmount.toFixed(2)} EGP</p>
                <p><strong>${translations[state.lang].depositPaid}:</strong> ${sale.depositPaidOnBooking.toFixed(2)} EGP</p>
                <p class="font-bold text-lg" style="color: var(--accent-color);">${translations[state.lang].amountRemaining}: ${Math.max(0, amountRemaining).toFixed(2)} EGP</p>
            `;
        } else {
            finalTotalDisplayHtml = `<p><strong>${translations[state.lang].total}:</strong> ${sale.totalAmount.toFixed(2)} EGP</p>`;
        }


        template = template.replace('{{saleDate}}', new Date(sale.createdAt).toLocaleString())
            .replace('{{saleId}}', sale.id)
            .replace('{{username}}', sale.cashier || 'N/A')
            .replace('{{customerInfo}}', customerInfoHtml)
            .replace('{{itemsHtml}}', itemsHtml)
            .replace('{{returnsSection}}', returnsSectionHtml)
            .replace('{{subtotal}}', sale.subtotal.toFixed(2))
            .replace('{{discountAmount}}', sale.discountAmount.toFixed(2))
            .replace('{{totalReturns}}', totalReturnsValue.toFixed(2))
            .replace('{{deliveryFee}}', sale.deliveryFee.toFixed(2)) // Pass deliveryFee to template
            .replace('{{paidAmount}}', displayPaidAmount)
            .replace('{{changeAmount}}', displayChangeAmount)
            .replace('{{logoSrc}}', logoBase64 || '');

        // Now, replace the total section in the template with the new dynamic HTML
        template = template.replace(
            `<div id="final-total-section"></div>`, // New placeholder from receipt.html
            finalTotalDisplayHtml // New dynamic HTML
        );


        const receiptWindow = window.open('', 'PRINT', 'height=800,width=400');
        receiptWindow.document.write(template);
        receiptWindow.document.close();
        setTimeout(() => {
            receiptWindow.focus();
            receiptWindow.print();
            setTimeout(() => receiptWindow.close(), 1000);
        }, 500);
    } catch (error) {
        console.error("Error printing receipt:", error);
        showNotification("An error occurred while printing the receipt.", "error");
    }
}

async function createSalesReportPDF(salesData, reportTitle) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const receiptData = await window.api.loadReceiptTemplate();
    const logoBase64 = receiptData.logoBase64;

    const detailedProductSales = {};
    const cashierSales = {};
    let totalReturnsCount = 0;
    let totalReturnsValue = 0;
    let totalCashSales = 0;
    let totalInstaPaySales = 0; // New
    let totalVCashSales = 0; // New
    let totalFreeDeliveries = 0; // New: Counter for free deliveries

    salesData.forEach(sale => {
        const cashier = sale.cashier || 'Unknown';
        if (!cashierSales[cashier]) {
            cashierSales[cashier] = { revenue: 0, profit: 0 };
        }
        // Use totalAmount (true total) for revenue calculation in reports
        cashierSales[cashier].revenue += sale.totalAmount;
        cashierSales[cashier].profit += sale.profit;

        if (sale.paymentMethod === 'cash') {
            totalCashSales += sale.totalAmount; // Sum of true totals for cash sales
        } else if (sale.paymentMethod === 'instaPay') {
            totalInstaPaySales += sale.totalAmount; // Sum of true totals for InstaPay sales
        } else if (sale.paymentMethod === 'vCash') {
            totalVCashSales += sale.totalAmount; // Sum of true totals for VCash sales
        }

        if (sale.isFreeDelivery) { // Count sales with free delivery
            totalFreeDeliveries++;
        }

        (sale.items || []).forEach(item => {
            const effectiveQty = item.quantity - (item.returnedQty || 0);
            const returnedQty = item.returnedQty || 0;
            if (returnedQty > 0) {
                totalReturnsCount += returnedQty;
                const discountRatio = sale.subtotal > 0 ? sale.discountAmount / sale.subtotal : 0;
                totalReturnsValue += returnedQty * item.unitPrice * (1 - discountRatio);
            }

            if (effectiveQty > 0) {
                const key = `${item.productId}-${item.color}-${item.size}`;
                if (!detailedProductSales[key]) {
                    detailedProductSales[key] = {
                        name: item.productName, color: item.color, size: item.size,
                        quantity: 0, income: 0, profit: 0, cashiers: new Set(),
                    };
                }
                const productStat = detailedProductSales[key];
                const itemSubtotal = item.unitPrice * effectiveQty;
                const discountRatio = sale.subtotal > 0 ? (sale.discountAmount / sale.subtotal) : 0;
                const itemIncome = itemSubtotal * (1 - discountRatio);
                const itemProfit = (item.unitPrice - (item.purchasePrice || 0)) * effectiveQty - (itemSubtotal * discountRatio);

                productStat.quantity += effectiveQty;
                productStat.income += itemIncome;
                productStat.profit += itemProfit;
                productStat.cashiers.add(cashier);
            }
        });
    });

    if (logoBase64) doc.addImage(logoBase64, 'PNG', 14, 12, 12, 12);
    doc.setFontSize(14);
    doc.text("Unique Bags", 28, 20);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(reportTitle, doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const dateText = new Date().toLocaleString();
    doc.text(dateText, doc.internal.pageSize.getWidth() - 14, 20, { align: 'right' });

    const head = [['Product', 'Color', 'Size', 'Qty', 'Cashiers', 'Income', 'Profit']];
    const body = Object.values(detailedProductSales).map(p => [
        p.name, p.color, p.size, p.quantity, Array.from(p.cashiers).join(', '),
        p.income.toFixed(2), p.profit.toFixed(2)
    ]);

    doc.autoTable({ head, body, startY: 35, headStyles: { fillColor: [45, 55, 72] }, styles: { font: 'helvetica', fontSize: 9 } });

    let finalY = doc.autoTable.previous.finalY;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Report Summary", 14, finalY + 15);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    const overallRevenue = Object.values(cashierSales).reduce((sum, c) => sum + c.revenue, 0);
    const overallProfit = Object.values(cashierSales).reduce((sum, c) => sum + c.profit, 0);
    const totalItemsSold = Object.values(detailedProductSales).reduce((sum, p) => sum + p.quantity, 0);

    let summaryY = finalY + 22;
    doc.text(`Overall Revenue: ${overallRevenue.toFixed(2)} EGP`, 14, summaryY); summaryY += 5;
    doc.text(`Overall Profit: ${overallProfit.toFixed(2)} EGP`, 14, summaryY); summaryY += 5;
    doc.text(`Total Cash Sales: ${totalCashSales.toFixed(2)} EGP`, 14, summaryY); summaryY += 5;
    doc.text(`Total InstaPay Sales: ${totalInstaPaySales.toFixed(2)} EGP`, 14, summaryY); summaryY += 5;
    doc.text(`Total VCash Sales: ${totalVCashSales.toFixed(2)} EGP`, 14, summaryY); summaryY += 5;
    doc.text(`Total Items Sold: ${totalItemsSold}`, 14, summaryY); summaryY += 5;
    doc.text(`Number of Returns: ${totalReturnsCount}`, 14, summaryY); summaryY += 5;
    doc.text(`Total Value of Returns: ${totalReturnsValue.toFixed(2)} EGP`, 14, summaryY); summaryY += 5;
    doc.text(`${translations[state.lang].totalFreeDeliveries}: ${totalFreeDeliveries}`, 14, summaryY); summaryY += 10;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Sales by Cashier", 14, summaryY);
    summaryY += 7;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    Object.entries(cashierSales).forEach(([cashier, sales]) => {
        if (summaryY > 280) { doc.addPage(); summaryY = 15; }
        doc.text(`${cashier}: ${sales.revenue.toFixed(2)} EGP (Profit: ${sales.profit.toFixed(2)} EGP)`, 14, summaryY);
        summaryY += 5;
    });

    doc.save(`${reportTitle.replace(/\s/g, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`);
}

async function exportReportToPDF() {
    await createSalesReportPDF(getFilteredSales(), "Sales Report");
}

// NEW: Function to export returns to PDF
async function exportReturnsToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const receiptData = await window.api.loadReceiptTemplate();
    const logoBase64 = receiptData.logoBase64;

    showNotification(translations[state.lang].processing || 'Processing...', 'info');

    const returnsData = [];
    state.sales.forEach(sale => {
        const returnedItems = sale.items.filter(item => (item.returnedQty || 0) > 0);
        if (returnedItems.length > 0) {
            // Calculate original total for the sale
            const originalTotal = sale.subtotal - sale.discountAmount + sale.deliveryFee;
            // Calculate net total after returns for the sale
            let netTotalAfterReturn = originalTotal;
            let totalReturnedValueForSale = 0;

            returnedItems.forEach(item => {
                const itemSubtotal = item.unitPrice * item.returnedQty;
                const discountRatio = sale.subtotal > 0 ? sale.discountAmount / sale.subtotal : 0;
                totalReturnedValueForSale += itemSubtotal * (1 - discountRatio);
            });
            netTotalAfterReturn -= totalReturnedValueForSale;


            returnsData.push({
                saleId: sale.id,
                returnDate: new Date(sale.createdAt).toLocaleString(),
                customerName: sale.customerName || 'N/A',
                customerPhone: sale.customerPhone || 'N/A',
                originalSaleTotal: originalTotal.toFixed(2),
                netSaleAfterReturn: netTotalAfterReturn.toFixed(2),
                deliveryFee: sale.deliveryFee.toFixed(2),
                returnedItems: returnedItems.map(item => ({
                    productName: item.productName,
                    color: item.color,
                    size: item.size,
                    returnedQty: item.returnedQty,
                    unitPrice: item.unitPrice,
                    totalValue: (item.returnedQty * item.unitPrice).toFixed(2)
                }))
            });
        }
    });

    if (returnsData.length === 0) {
        showNotification("No returns found for the selected criteria.", 'info');
        return;
    }

    if (logoBase64) doc.addImage(logoBase64, 'PNG', 14, 12, 12, 12);
    doc.setFontSize(14);
    doc.text("Unique Bags", 28, 20); // Use Unique Bags for returns report
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(translations[state.lang].exportReturns || "Returns Report", doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const dateText = new Date().toLocaleString();
    doc.text(dateText, doc.internal.pageSize.getWidth() - 14, 20, { align: 'right' });

    let currentY = 35;

    for (const returnSale of returnsData) {
        if (currentY > 270) { // Check for page overflow
            doc.addPage();
            currentY = 15;
        }

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(`Sale ID: ${returnSale.saleId}`, 14, currentY);
        currentY += 7;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`${translations[state.lang].returnDate} ${returnSale.returnDate}`, 14, currentY); currentY += 5;
        doc.text(`Customer: ${returnSale.customerName} (${returnSale.customerPhone})`, 14, currentY); currentY += 5;
        doc.text(`${translations[state.lang].originalSaleTotal} ${returnSale.originalSaleTotal} EGP`, 14, currentY); currentY += 5;
        doc.text(`${translations[state.lang].netSaleAfterReturn} ${returnSale.netSaleAfterReturn} EGP`, 14, currentY); currentY += 5;
        doc.text(`${translations[state.lang].deliveryFee} ${returnSale.deliveryFee} EGP`, 14, currentY); currentY += 7;

        const head = [['Product', 'Color', 'Size', 'Returned Qty', 'Unit Price', 'Total Value']];
        const body = returnSale.returnedItems.map(item => [
            item.productName,
            item.color,
            item.size,
            item.returnedQty,
            item.unitPrice.toFixed(2),
            item.totalValue
        ]);

        doc.autoTable({
            head: head,
            body: body,
            startY: currentY,
            headStyles: { fillColor: [45, 55, 72] },
            styles: { fontSize: 8 },
            didDrawPage: function (data) {
                currentY = data.cursor.y; // Update currentY after table
            }
        });
        currentY = doc.autoTable.previous.finalY + 10; // Add some margin after table
    }

    doc.save(`Returns_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
    showNotification('Returns report exported successfully!', 'success');
}


async function generateShiftReport() {
    // This function is no longer called by a button in the UI as per user request.
    // It remains here in case it's needed for other internal logic or future features.
    const reportTime = new Date().toISOString();
    const startTime = state.lastShiftReportTime || new Date(0).toISOString();

    const shiftSales = state.sales.filter(sale => sale.createdAt > startTime && sale.createdAt <= reportTime);

    if (shiftSales.length === 0) {
        showNotification("No new sales since the last shift report.", "info");
        return;
    }

    const reportTitle = translations[state.lang].shiftReportTitle || "Shift Report";
    await createSalesReportPDF(shiftSales, reportTitle);

    await window.api.setLastShiftTime(reportTime);
    state.lastShiftReportTime = reportTime;
    showNotification("Shift report generated and timer reset.", "success");
}

function getFilteredSales() {
    const timeFilterType = document.getElementById('time-filter-type').value;
    const selectedMonth = document.getElementById('report-month-picker').value;
    const selectedDay = document.getElementById('report-day-picker').value;
    const selectedUser = document.getElementById('user-filter').value;
    const historySearchTerm = document.getElementById('history-search').value.toLowerCase();

    return state.sales.filter(sale => {
        if (timeFilterType === 'month' && selectedMonth && !sale.createdAt.startsWith(selectedMonth)) return false;
        if (timeFilterType === 'day' && selectedDay && !sale.createdAt.startsWith(selectedDay)) return false;
        if (selectedUser !== 'all' && sale.cashier !== selectedUser) return false;
        if (historySearchTerm &&
            !sale.id.toLowerCase().includes(historySearchTerm) &&
            !(sale.cashier && sale.cashier.toLowerCase().includes(historySearchTerm)) &&
            !(sale.customerName && sale.customerName.toLowerCase().includes(historySearchTerm)) &&
            !(sale.customerPhone && sale.customerPhone.includes(historySearchTerm))
        ) return false;
        return true;
    });
}

function generateReport() {
    const historyList = document.getElementById('sales-history-list');
    if (!historyList) return;
    const filteredSales = getFilteredSales();

    let totalRevenue = 0, totalProfit = 0, totalItemsSold = 0, totalItemsReturned = 0, totalReturnsValue = 0, totalCashSales = 0, totalInstaPaySales = 0, totalVCashSales = 0;
    let totalFreeDeliveriesCount = 0;

    historyList.innerHTML = '';

    if (filteredSales.length === 0) {
        historyList.innerHTML = `<p class="text-center p-4">No sales history found for the selected criteria.</p>`;
    } else {
        filteredSales.forEach(sale => {
            const saleItems = sale.items || [];
            let itemsHtml = saleItems.map(item => {
                let returnInfo = (item.returnedQty || 0) > 0 ? `<span class="text-yellow-400 ml-2">(Returned: ${item.returnedQty})</span>` : '';
                return `<li class="flex justify-between"><span>${item.quantity}x ${item.productName} (${item.color}/${item.size})</span>${returnInfo}</li>`;
            }).join('');

            const cashier = sale.cashier || 'Unknown';

            totalRevenue += sale.totalAmount;
            totalProfit += sale.profit;

            if (sale.paymentMethod === 'cash') {
                totalCashSales += sale.totalAmount;
            } else if (sale.paymentMethod === 'instaPay') {
                totalInstaPaySales += sale.totalAmount;
            } else if (sale.paymentMethod === 'vCash') {
                totalVCashSales += sale.totalAmount;
            }

            if (sale.isFreeDelivery) {
                totalFreeDeliveriesCount++;
            }


            saleItems.forEach(item => {
                totalItemsSold += item.quantity - (item.returnedQty || 0);
                const returnedQty = item.returnedQty || 0;
                if (returnedQty > 0) {
                    totalItemsReturned += returnedQty;
                    const discountRatio = sale.subtotal > 0 ? sale.discountAmount / sale.subtotal : 0;
                    totalReturnsValue += returnedQty * item.unitPrice * (1 - discountRatio);
                }
            });

            const saleCard = document.createElement('div');
            const isSelected = state.selectedSales.has(sale.id);
            saleCard.className = `bg-white p-4 rounded-lg shadow-md flex items-start space-x-4 ${isSelected ? 'sale-card-selected' : ''}`;
            const canReturn = saleItems.some(item => (item.quantity - (item.returnedQty || 0)) > 0);
            const deliveryInfo = sale.isFreeDelivery ? '<span class="text-green-400 font-bold">Free Delivery</span>' : (sale.deliveryFee > 0 ? `Delivery Fee: ${sale.deliveryFee.toFixed(2)} EGP` : '');

            // Determine the total display based on whether a deposit was paid on a booking
            let totalDisplayHtml;
            if (sale.depositPaidOnBooking > 0) {
                const amountRemaining = sale.totalAmount - sale.depositPaidOnBooking;
                totalDisplayHtml = `
                    <p class="font-bold">${translations[state.lang].total}: ${sale.totalAmount.toFixed(2)} EGP (${sale.paymentMethod})</p>
                    <p class="text-sm text-green-600">${translations[state.lang].depositPaid}: ${sale.depositPaidOnBooking.toFixed(2)} EGP</p>
                    <p class="font-bold text-lg" style="color: var(--accent-color);">${translations[state.lang].amountRemaining}: ${Math.max(0, amountRemaining).toFixed(2)} EGP</p>
                `;
            } else {
                totalDisplayHtml = `<p class="font-bold">Total: ${sale.totalAmount.toFixed(2)} EGP (${sale.paymentMethod})</p>`;
            }

            saleCard.innerHTML = `
                <input type="checkbox" class="sale-checkbox h-5 w-5 mt-1 rounded" data-sale-id="${sale.id}" ${isSelected ? 'checked' : ''}>
                <div class="flex-grow">
                     <div class="flex justify-between items-start">
                        <div>
                            <p class="font-bold">Receipt ID: ${sale.id}</p>
                            <p class="text-sm text-gray-400">${new Date(sale.createdAt).toLocaleString()}</p>
                            <p class="text-sm text-gray-500">Cashier: ${cashier}</p>
                            ${sale.customerName ? `<p class="text-sm text-gray-400">Customer: ${sale.customerName} (${sale.customerPhone || 'N/A'})</p>` : ''}
                            ${sale.customerAddress ? `<p class="text-sm text-gray-400">Address: ${sale.customerAddress}</p>` : ''}
                            ${sale.customerCity ? `<p class="text-sm text-gray-400">City: ${sale.customerCity}</p>` : ''}
                        </div>
                        <div class="flex space-x-2">
                            <button class="print-receipt-btn btn-secondary py-1 px-3 rounded text-xs" data-sale-id="${sale.id}">${translations[state.lang].btnPrint}</button>
                            <button class="return-sale-btn btn-primary py-1 px-3 rounded text-xs" data-sale-id="${sale.id}" ${canReturn ? '' : 'disabled'}>${canReturn ? translations[state.lang].btnReturn : translations[state.lang].btnReturned}</button>
                        </div>
                    </div>
                    <ul class="mt-2 list-disc list-inside text-sm space-y-1 pl-5">${itemsHtml}</ul>
                    <div class="text-right mt-2 border-t border-gray-700 pt-2">
                        <p>${deliveryInfo}</p>
                        ${totalDisplayHtml}
                    </div>
                </div>`;
            historyList.appendChild(saleCard);
        });
    }

    document.getElementById('total-revenue').textContent = `${totalRevenue.toFixed(2)} EGP`;
    document.getElementById('total-profit').textContent = `${totalProfit.toFixed(2)} EGP`;
    document.getElementById('total-cash-sales').textContent = `${totalCashSales.toFixed(2)} EGP`;

    // Dynamically add/update InstaPay, VCash, and Free Deliveries divs
    const reportSummary = document.getElementById('report-summary');

    // Clear previously added dynamic divs to avoid duplicates
    const dynamicDivs = reportSummary.querySelectorAll('[id$="-sales-div"], [id$="-deliveries-div"]');
    dynamicDivs.forEach(div => div.remove());

    // Add InstaPay and VCash divs next to Total Cash Sales
    let totalCashSalesDiv = document.getElementById('total-cash-sales').closest('.bg-gray-100');
    if (totalCashSalesDiv) {
        const parentGrid = totalCashSalesDiv.parentNode;

        if (totalInstaPaySales > 0) {
            const instaPayDiv = document.createElement('div');
            instaPayDiv.id = 'total-instapay-sales-div';
            instaPayDiv.className = 'bg-gray-100 p-4 rounded-lg';
            instaPayDiv.innerHTML = `
                <h3 class="font-bold" data-lang-key="totalInstaPaySales">Total InstaPay Sales</h3>
                <p id="total-instapay-sales">${totalInstaPaySales.toFixed(2)} EGP</p>
            `;
            // Insert after Total Cash Sales
            parentGrid.insertBefore(instaPayDiv, totalCashSalesDiv.nextSibling);
        }

        if (totalVCashSales > 0) {
            const vCashDiv = document.createElement('div');
            vCashDiv.id = 'total-vcash-sales-div';
            vCashDiv.className = 'bg-gray-100 p-4 rounded-lg';
            // Insert after InstaPay if it exists, otherwise after Cash Sales
            const insertAfter = document.getElementById('total-instapay-sales-div') || totalCashSalesDiv;
            parentGrid.insertBefore(vCashDiv, insertAfter.nextSibling);

            vCashDiv.innerHTML = `
                <h3 class="font-bold" data-lang-key="totalVCashSales">Total VCash Sales</h3>
                <p id="total-vcash-sales">${totalVCashSales.toFixed(2)} EGP</p>
            `;
        }
    }

    if (totalFreeDeliveriesCount > 0) {
        const freeDeliveryDiv = document.createElement('div');
        freeDeliveryDiv.id = 'total-free-deliveries-div';
        freeDeliveryDiv.className = 'bg-gray-100 p-4 rounded-lg';
        freeDeliveryDiv.innerHTML = `
            <h3 class="font-bold" data-lang-key="totalFreeDeliveries">Total Free Deliveries</h3>
            <p id="total-free-deliveries">${totalFreeDeliveriesCount}</p>
        `;
        reportSummary.appendChild(freeDeliveryDiv);
    }

    // The "Total Card Sales" element is now removed from HTML, so no need to update it.
    // let totalCardSalesEl = document.getElementById('total-card-sales');
    // if (totalCardSalesEl) {
    //     totalCardSalesEl.textContent = `${(totalInstaPaySales + totalVCashSales).toFixed(2)} EGP`;
    // }

    updateUIText(); // Re-apply translations after updating report summary HTML

    document.getElementById('total-items-sold').textContent = totalItemsSold;
    document.getElementById('total-items-returned').textContent = totalItemsReturned;
    document.getElementById('total-returns-value').textContent = `${totalReturnsValue.toFixed(2)} EGP`;

    document.getElementById('selection-controls').classList.toggle('hidden', filteredSales.length === 0);
    document.getElementById('select-all-checkbox').checked = false;
}

function exportCustomersToExcel() {
    const searchTerm = document.getElementById('customer-search').value.toLowerCase();

    let filteredCustomers = state.customers;

    if (searchTerm) {
        filteredCustomers = filteredCustomers.filter(c =>
            c.name.toLowerCase().includes(searchTerm) ||
            c.phone.includes(searchTerm)
        );
    }

    const dataForSheet = filteredCustomers.map(customer => ({
        "Name": customer.name,
        "Phone": customer.phone,
        "Address": customer.address,
        "City": customer.city,
        "Total Items Bought": customer.totalItemsBought,
        "Last Purchase Date": customer.lastPaymentDate ? new Date(customer.lastPaymentDate).toLocaleDateString() : 'N/A'
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataForSheet);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");

    worksheet['!cols'] = [
        { wch: 25 }, { wch: 20 }, { wch: 40 }, { wch: 20 }, { wch: 20 }, { wch: 20 }
    ];

    XLSX.writeFile(workbook, `Customers_Report_${new Date().toISOString().slice(0, 10)}.xlsx`);

    showNotification('Customers data exported successfully!', 'success');
}

// Function to export salaries data to an Excel sheet
async function exportSalariesToExcel() {
    const searchTerm = document.getElementById('salaries-search-input').value.toLowerCase();
    let filteredUsers = state.users;
    if (searchTerm) {
        filteredUsers = filteredUsers.filter(u => u.username.toLowerCase().includes(searchTerm));
    }

    const dataForSheet = filteredUsers.map(user => {
        const userData = state.salaries[user.username] || { fixed: 0, commission: 0, bonus: 0 }; // Ensure bonus is retrieved
        const piecesSold = state.sales
            .filter(sale => sale.cashier === user.username)
            .reduce((total, sale) => total + sale.items.reduce((itemTotal, item) => itemTotal + (item.quantity - (item.returnedQty || 0)), 0), 0);
        const totalCommission = piecesSold * userData.commission;
        const totalSalary = userData.fixed + totalCommission + userData.bonus; // Include bonus in total salary

        return {
            "User Name": user.username,
            "Fixed Salary": userData.fixed.toFixed(2),
            "Commission / Piece": userData.commission.toFixed(2),
            "Bonus": userData.bonus.toFixed(2), // Export bonus
            "Pieces Sold": piecesSold,
            "Total Commission": totalCommission.toFixed(2),
            "Total Salary": totalSalary.toFixed(2)
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(dataForSheet);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Salaries Report");

    worksheet['!cols'] = [
        { wch: 20 }, { wch: 15 }, { wch: 20 }, { wch: 10 }, { wch: 15 }, { wch: 20 }, { wch: 20 } // Adjust column widths for bonus
    ];

    XLSX.writeFile(workbook, `Salaries_Report_${new Date().toISOString().slice(0, 10)}.xlsx`);

    showNotification('Salaries data exported successfully!', 'success');
}


async function exportInventoryToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape' });
    const receiptData = await window.api.loadReceiptTemplate();
    const logoBase64 = receiptData.logoBase64;

    showNotification('Generating inventory report, please wait...', 'info');

    await new Promise(resolve => setTimeout(resolve, 50));

    if (logoBase64) doc.addImage(logoBase64, 'PNG', 14, 12, 12, 12);
    doc.setFontSize(14);
    doc.text("Unique Bags", 28, 20);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(translations[state.lang].inventoryReportTitle, doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const dateText = new Date().toLocaleString();
    doc.text(dateText, doc.internal.pageSize.getWidth() - 14, 20, { align: 'right' });

    const head = [
        [
            translations[state.lang].colProductName || 'Product',
            translations[state.lang].labelColorName || 'Color',
            translations[state.lang].labelSize || 'Size',
            translations[state.lang].colQuantity || 'Current Stock',
            translations[state.lang].colSoldThisMonth || 'Sold (Month)',
            translations[state.lang].colTotalSalesMonth || 'Total Sales (Month)'
        ]
    ];
    const body = [];

    const currentMonth = new Date().toISOString().slice(0, 7);
    const salesThisMonth = state.sales.filter(s => s.createdAt.startsWith(currentMonth));

    state.products.forEach(product => {
        let hasVariants = false;
        let totalProductSaleValue = 0;

        if (product.colors && Object.keys(product.colors).length > 0) {
            Object.entries(product.colors).forEach(([colorName, colorData]) => {
                if (colorData.sizes && Object.keys(colorData.sizes).length > 0) {
                    Object.entries(colorData.sizes).forEach(([sizeName, sizeData]) => {
                        hasVariants = true;
                        const currentStock = sizeData.quantity;
                        let soldThisMonth = 0;
                        let variantSaleValue = 0;

                        salesThisMonth.forEach(sale => {
                            sale.items.forEach(item => {
                                if (item.productId === product.id && item.color === colorName && item.size === sizeName) {
                                    const netQuantity = item.quantity - (item.returnedQty || 0);
                                    if (netQuantity > 0) {
                                        soldThisMonth += netQuantity;
                                        variantSaleValue += item.unitPrice * netQuantity;
                                    }
                                }
                            });
                        });

                        totalProductSaleValue += variantSaleValue;

                        body.push([
                            product.name,
                            colorName,
                            sizeName,
                            currentStock,
                            soldThisMonth,
                            `${variantSaleValue.toFixed(2)} EGP`
                        ]);
                    });
                }
            });
        }

        if (hasVariants) {
            const totalProductStock = getProductTotalQuantity(product);
            const summaryText = `Total for ${product.name}: ${totalProductStock} items | Total Sales: ${totalProductSaleValue.toFixed(2)} EGP`;
            body.push([
                {
                    content: summaryText,
                    colSpan: 6,
                    styles: { fillColor: '#FFFF00', textColor: '#000000', halign: 'center', fontStyle: 'bold' }
                }
            ]);
        }
    });

    doc.autoTable({
        head: head,
        body: body,
        startY: 35,
        headStyles: { fillColor: [45, 55, 72] },
        styles: { font: 'helvetica', fontSize: 9 },
    });

    doc.save(`Inventory_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
    showNotification('Inventory report exported successfully!', 'success');
}


function populateUserFilter() {
    const userFilter = document.getElementById('user-filter');
    if (!userFilter) return;
    userFilter.innerHTML = `<option value="all">${translations[state.lang].allUsers}</option>`;
    if (state.users) {
        state.users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.username;
            option.textContent = user.username;
            userFilter.appendChild(option);
        });
    }
}

// --- Modal Control Functions ---
function showAdminPasswordModal() {
    const modal = document.getElementById('admin-password-modal');
    modal.classList.remove('hidden');
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-password-error').classList.add('hidden');
    document.getElementById('admin-password-input').focus();
}

function closeAdminPasswordModal() {
    document.getElementById('admin-password-modal').classList.add('hidden');
}

function showBookingConfirmationModal(receiptId) {
    const modal = document.getElementById('booking-confirmation-modal');
    modal.classList.remove('hidden');
    document.getElementById('booking-deposit-input').value = '';
    document.getElementById('booking-deposit-input').focus();
}

function closeBookingConfirmationModal() {
    document.getElementById('booking-confirmation-modal').classList.add('hidden');
}

// --- REBUILT MODAL FUNCTIONS ---

function createSizeEntry(size = '', quantity = '') {
    const sizeEntry = document.createElement('div');
    sizeEntry.className = 'size-entry flex items-center space-x-2 mb-2';
    sizeEntry.innerHTML = `
        <input type="text" value="${size}" class="size-name-input flex-grow p-1 rounded-md" placeholder="${translations[state.lang].labelSize}">
        <input type="number" value="${quantity}" class="size-quantity-input w-20 p-1 rounded-md" placeholder="${translations[state.lang].labelQuantity}" min="0">
        <button type="button" class="remove-size-btn btn-danger rounded-full w-6 h-6 flex items-center justify-center text-xs">-</button>
    `;
    return sizeEntry;
}

function createColorEntry(colorName = '', colorData = { sizes: { '': { quantity: '' } } }) {
    const colorEntry = document.createElement('div');
    colorEntry.className = 'color-entry border border-gray-300 p-3 rounded-lg mb-3';

    const sizesHtml = Object.entries(colorData.sizes).map(([size, sizeData]) => {
        return createSizeEntry(size, sizeData.quantity).outerHTML;
    }).join('');

    colorEntry.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <input type="text" value="${colorName}" class="color-name-input font-semibold p-2 rounded-md flex-grow" placeholder="${translations[state.lang].labelColorName}">
            <button type="button" class="remove-color-btn btn-danger rounded-full w-7 h-7 flex items-center justify-center ml-2">-</button>
        </div>
        <div class="sizes-container pl-4 border-l-2 border-gray-200">
            <h4 class="text-sm font-medium mb-1">${translations[state.lang].labelSizesForColor} ${colorName}</h4>
            ${sizesHtml}
        </div>
        <button type="button" class="add-size-btn btn-secondary text-xs py-1 px-2 rounded mt-2">${translations[state.lang].btnAddSize}</button>
    `;
    return colorEntry;
}

function showProductModal(product = null) {
    state.editingProductId = product ? product.id : null;
    const modal = document.getElementById('product-modal');
    const modalContent = modal.querySelector('.modal-content');
    const isEditing = product !== null;
    const title = isEditing ? translations[state.lang].modalEditTitle : translations[state.lang].modalAddTitle;

    const categoryOptions = state.categories.filter(c => c !== 'All').map(c => `<option value="${c}" ${product?.category === c ? 'selected' : ''}>${c}</option>`).join('');

    const imagePreviews = (product?.images || []).map(imgSrc => `
        <div class="relative">
            <img src="${imgSrc}" class="w-full h-auto object-cover rounded-lg new-preview" style="aspect-ratio: 3/2;">
            <button type="button" class="remove-image-preview-btn absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">&times;</button>
        </div>
    `).join('');

    const colorEntries = product?.colors ? Object.entries(product.colors).map(([colorName, colorData]) => createColorEntry(colorName, colorData).outerHTML).join('') : createColorEntry().outerHTML;

    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-6">${title}</h2>
        <form id="product-form" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="product-name" class="block mb-1 font-medium">${translations[state.lang].labelProductName}</label>
                    <input type="text" id="product-name" value="${product?.name || ''}" class="w-full p-2 rounded-lg" required>
                </div>
                <div>
                    <label for="product-category" class="block mb-1 font-medium">${translations[state.lang].labelCategory}</label>
                    <input type="text" id="product-category" list="category-list" value="${product?.category || ''}" class="w-full p-2 rounded-lg">
                    <datalist id="category-list">${categoryOptions}</datalist>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label for="product-code" class="block mb-1 font-medium">${translations[state.lang].labelProductCode}</label>
                    <input type="text" id="product-code" value="${product?.code || ''}" class="w-full p-2 rounded-lg">
                </div>
                <div>
                    <label for="main-barcode" class="block mb-1 font-medium">${translations[state.lang].labelBarcode}</label>
                    <input type="text" id="main-barcode" value="${product?.mainBarcode || ''}" class="w-full p-2 rounded-lg">
                </div>
            </div>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="purchase-price" class="block mb-1 font-medium">${translations[state.lang].colPurchasePrice}</label>
                    <input type="number" id="purchase-price" value="${product?.purchasePrice || 0}" class="w-full p-2 rounded-lg" required min="0" step="0.01">
                </div>
                <div>
                    <label for="selling-price" class="block mb-1 font-medium">${translations[state.lang].colSellingPrice}</label>
                    <input type="number" id="selling-price" value="${product?.sellingPrice || 0}" class="w-full p-2 rounded-lg" required min="0" step="0.01">
                </div>
            </div>
            <div>
                <label for="product-images" class="block mb-1 font-medium">${translations[state.lang].labelProductImages}</label>
                <input type="file" id="product-images" class="w-full p-2 rounded-lg border" multiple accept="image/*">
                <div id="image-previews-container" class="mt-2 grid grid-cols-3 gap-2">${imagePreviews}</div>
            </div>
            <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-2">
                     <h3 class="text-lg font-bold">${translations[state.lang].labelColors}</h3>
                     <button type="button" id="add-color-btn" class="btn-primary py-1 px-3 rounded-md text-sm">${translations[state.lang].btnAddColor}</button>
                </div>
                <div id="color-container">${colorEntries}</div>
            </div>
            <div class="flex justify-end space-x-4 pt-4">
                <button type="button" id="cancel-product-modal-btn" class="btn-secondary py-2 px-4 rounded-lg">${translations[state.lang].btnCancel}</button>
                <button type="submit" class="btn-primary py-2 px-4 rounded-lg">${translations[state.lang].btnSave}</button>
            </div>
        </form>
    `;

    modal.classList.remove('hidden');
    document.getElementById('product-form').addEventListener('submit', handleProductFormSubmit);
}

function showCategoryModal() {
    const modal = document.getElementById('category-modal');
    const modalContent = modal.querySelector('.modal-content');
    const lang = state.lang;

    const existingCategoriesHtml = state.categories.filter(c => c !== 'All').map(c => `
            <div class="flex justify-between items-center p-2 bg-white rounded-md">
                <span>${c}</span>
                <button class="delete-category-btn btn-danger text-xs py-1 px-2 rounded" data-category="${c}">Delete</button>
            </div>
        `).join('');

    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${translations[lang].manageCategoriesTitle}</h2>
        <div class="mb-4">
            <label for="new-category-name" class="block mb-2">${translations[lang].newCategoryName}</label>
            <div class="flex space-x-2">
                <input type="text" id="new-category-name" class="flex-grow p-2 rounded-lg">
                <button id="add-category-btn" class="btn-primary py-2 px-4 rounded-lg">${translations[lang].addCategoryBtn}</button>
            </div>
        </div>
        <h3 class="text-xl font-semibold mb-2 mt-6">${translations[lang].existingCategories}</h3>
        <div id="existing-categories-list" class="space-y-2 max-h-60 overflow-y-auto">
            ${existingCategoriesHtml || `<p class="text-gray-500">No categories yet.</p>`}
        </div>
        <div class="flex justify-end mt-6">
            <button id="close-category-modal-btn" class="btn-secondary py-2 px-4 rounded-lg">${translations[lang].doneBtn}</button>
        </div>
    `;

    modal.classList.remove('hidden');
}

function showBarcodeModal(productId) {
    const modal = document.getElementById('barcode-modal');
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    let barcodesHtml = '';
    if (product.colors) {
        for (const [colorName, colorData] of Object.entries(product.colors)) {
            if (colorData.sizes) {
                for (const [sizeName, sizeData] of Object.entries(colorData.sizes)) {
                    if (sizeData.barcode) {
                        barcodesHtml += `
                            <div class="flex justify-between items-center p-3 bg-white rounded-lg shadow">
                                <div>
                                    <p class="font-bold">${product.name} - ${colorName} / ${sizeName}</p>
                                    <p class="text-sm text-gray-600 font-mono">${sizeData.barcode}</p>
                                </div>
                                <button class="print-size-barcode-btn btn-primary text-sm py-1 px-3 rounded" data-product-id="${product.id}" data-color="${colorName}" data-size="${sizeName}">Print</button>
                            </div>
                        `;
                    }
                }
            }
        }
    }

    modal.innerHTML = `
        <div class="modal-content w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Barcodes for ${product.name}</h2>
            <div class="space-y-3 max-h-96 overflow-y-auto">
                ${barcodesHtml || '<p>No barcodes found for this product.</p>'}
            </div>
            <div class="flex justify-end mt-6">
                <button id="close-barcode-modal-btn" class="btn-secondary py-2 px-4 rounded-lg">${translations[state.lang].btnOK}</button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function showReturnModal(saleId) {
    state.returningSaleId = saleId;
    const modal = document.getElementById('return-modal');
    const sale = state.sales.find(s => s.id === saleId);
    if (!sale) return;

    const returnableItemsHtml = sale.items.map(item => {
        const maxReturnable = item.quantity - (item.returnedQty || 0);
        if (maxReturnable <= 0) return '';
        return `
            <div class="flex justify-between items-center p-2 bg-white rounded">
                <div>
                    <p>${item.productName} (${item.color}/${item.size})</p>
                    <p class="text-xs text-gray-500">Max returnable: ${maxReturnable}</p>
                </div>
                <input type="number" class="return-quantity-input w-20 p-1 rounded-md border" value="0" min="0" max="${maxReturnable}" 
                       data-item-id="${item.id}" data-product-id="${item.productId}" data-color="${item.color}" data-size="${item.size}">
            </div>
        `;
    }).join('');

    modal.innerHTML = `
        <div class="modal-content w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Return Items for Receipt #${sale.id}</h2>
            <div class="space-y-2">${returnableItemsHtml}</div>
            <div class="flex justify-end space-x-4 mt-6">
                <button id="cancel-return-btn" class="btn-secondary py-2 px-4 rounded-lg">Cancel</button>
                <button id="confirm-return-btn" class="btn-primary py-2 px-4 rounded-lg">Confirm Return</button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function showReceiptSelectionModal(itemData) {
    state.itemToAdd = itemData;
    const modal = document.getElementById('receipt-selection-modal');

    const receiptButtons = state.receipts.map((r, index) =>
        `<button class="btn-primary py-3 px-5 rounded-lg" data-receipt-id="${r.id}">Receipt ${index + 1}</button>`
    ).join('');

    modal.innerHTML = `
         <div class="modal-content w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Select Receipt</h2>
            <p class="mb-6">Which receipt do you want to add this item to?</p>
            <div id="receipt-selection-buttons" class="flex flex-wrap gap-4 justify-center">
                ${receiptButtons}
            </div>
             <div class="flex justify-end mt-8">
                <button id="cancel-receipt-selection-btn" class="btn-secondary py-2 px-4 rounded-lg">Cancel</button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}


function closeProductModal() { document.getElementById('product-modal').classList.add('hidden'); }
function closeBarcodeModal() { document.getElementById('barcode-modal').classList.add('hidden'); }
function closeReceiptSelectionModal() { document.getElementById('receipt-selection-modal').classList.add('hidden'); }
function closeReturnModal() { document.getElementById('return-modal').classList.add('hidden'); }
function closeCategoryModal() { document.getElementById('category-modal').classList.add('hidden'); }

async function handleAddCategory() {
    const input = document.getElementById('new-category-name');
    const newCategory = input.value.trim();
    if (newCategory && !state.categories.includes(newCategory)) {
        state.categories.push(newCategory);
        state.categories.sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
        await saveData();
        showCategoryModal(); // Re-render the modal
        input.value = '';
    }
}

async function handleDeleteCategory(categoryToDelete) {
    if (confirm(translations[state.lang].categoryDeleteConfirm)) {
        state.categories = state.categories.filter(c => c !== categoryToDelete);
        // Uncategorize products
        state.products.forEach(p => {
            if (p.category === categoryToDelete) {
                p.category = '';
            }
        });
        await saveData();
        showCategoryModal(); // Re-render the modal
        render(); // Re-render main UI
    }
}

// --- INITIALIZATION ---
async function init() {
    injectAnimationsCSS();
    window.api.onSetUser((user) => {
        state.currentUser = user;
        loadAndRenderApp();
    });
}

function injectAnimationsCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-link .icon-wrapper {
            transition: transform 0.2s ease-in-out;
            position: relative;
            width: 1.7rem;
            height: 1.7rem;
        }
        .nav-link:hover:not(.active) .icon-wrapper {
            transform: scale(1.15) rotate(3deg);
        }
        #nav-selling:hover:not(.active) .icon-wrapper {
            animation: bounce 0.5s;
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0) scale(1.1) rotate(3deg); }
            50% { transform: translateY(-3px) scale(1.1) rotate(3deg); }
        }
        .icon-state {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .icon-open {
            opacity: 0;
            transform: translateY(5px);
        }
        .nav-link:hover .icon-closed {
            opacity: 0;
            transform: translateY(-5px);
        }
        .nav-link:hover .icon-open {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

function setupNavIcons() {
    // The previous logic for adding/removing 'hidden' class on mouseenter/leave
    // has been replaced by a pure CSS solution in injectAnimationsCSS() for better performance.
}


async function loadAndRenderApp() {
    const data = await window.api.loadData();
    if (data && !data.error) {
        state.products = data.products || [];
        state.sales = data.sales || [];
        state.users = data.users || [];
        state.categories = ['All', ...(data.categories || [])].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
        state.customers = data.customers || [];
        state.bookings = data.bookings || [];
        state.salaries = data.salaries || {};
    } else {
        console.error("Failed to load data:", data?.error);
        showNotification("CRITICAL: Failed to load database.", 'error');
    }

    state.lastShiftReportTime = await window.api.getLastShiftTime();

    cartSession.load();
    if (!window.listenersAttached) {
        setupEventListeners();
        setupNavIcons();
        window.listenersAttached = true;
    }
    populateUserFilter();
    render();
}

init();
