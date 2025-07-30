// --- حالة التطبيق (State) ---
// هذا الكائن يحتوي على جميع البيانات التي يحتاجها التطبيق ليعمل
const state = {
    currentPage: 'home-page',
    products: [],
    receipts: [],
    bookings: [],
    activeBookingId: null,
    activeReceiptId: null,
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
        navHome: 'Home', navInventory: 'Inventory', navSelling: 'Selling', navBooking: 'Booking', navHistory: 'History', navCustomers: 'Customers', navAbout: 'About', btnLogout: 'Logout',
        searchPlaceholder: 'Search by name, code, or barcode...',
        inventorySearchPlaceholder: 'Search inventory...',
        addNewProduct: 'Add New Product',
        colProductName: 'Name', colProductCode: 'Code', colCategory: 'Category', colImage: 'Image', colQuantity: 'Quantity', colPurchasePrice: 'Purchase Price', colSellingPrice: 'Selling Price', colColors: 'Colors', colActions: 'Actions',
        modalAddTitle: 'Add New Product', modalEditTitle: 'Edit Product',
        labelProductName: 'Product Name', labelCategory: 'Category', labelProductCode: 'Product Code (SKU)', labelBarcode: 'Main Barcode', labelProductImages: 'Product Images',
        labelColors: 'Colors & Stock', btnAddColor: '+ Add Color', labelColorName: 'Color',
        labelSizesForColor: 'Sizes for', labelSize: 'Size', labelQuantity: 'Quantity', btnAddSize: '+ Add Size',
        btnSave: 'Save Product', btnCancel: 'Cancel', btnOK: 'OK',
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
        // **NEW** Booking translations
        saveAsBooking: 'Save as Booking',
        confirmBookingTitle: 'Confirm Booking',
        confirmBookingMsg: 'Please enter the deposit amount to save this cart as a booking.',
        amountDue: 'Amount Due:',
        bookingDetails: 'Booking Details',
        printBooking: 'Print Booking',
        bookingInvoice: 'Booking Invoice',
    },
    ar: {
        navHome: 'الرئيسية', navInventory: 'المخزون', navSelling: 'البيع', navBooking: 'الحجز', navHistory: 'السجلات', navCustomers: 'العملاء', navAbout: 'حول', btnLogout: 'تسجيل الخروج',
        searchPlaceholder: 'البحث بالاسم أو الكود أو الباركود...',
        inventorySearchPlaceholder: 'البحث في المخزون...',
        addNewProduct: 'إضافة منتج جديد',
        colProductName: 'الاسم', colProductCode: 'الكود', colCategory: 'الفئة', colImage: 'صورة', colQuantity: 'الكمية', colPurchasePrice: 'سعر الشراء', colSellingPrice: 'سعر البيع', colColors: 'الألوان', colActions: 'إجراءات',
        modalAddTitle: 'إضافة منتج جديد', modalEditTitle: 'تعديل المنتج',
        labelProductName: 'اسم المنتج', labelCategory: 'الفئة', labelProductCode: 'كود المنتج (SKU)', labelBarcode: 'الباركود الرئيسي', labelProductImages: 'صور المنتج',
        labelColors: 'الألوان والمخزون', btnAddColor: '+ إضافة لون', labelColorName: 'اللون',
        labelSizesForColor: 'مقاسات لون', labelSize: 'مقاس', labelQuantity: 'كمية', btnAddSize: '+ إضافة مقاس',
        btnSave: 'حفظ المنتج', btnCancel: 'إلغاء', btnOK: 'موافق',
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
        // **NEW** Booking translations
        saveAsBooking: 'حفظ كحجز',
        confirmBookingTitle: 'تأكيد الحجز',
        confirmBookingMsg: 'الرجاء إدخال قيمة العربون لحفظ هذه السلة كحجز.',
        amountDue: 'المبلغ المتبقي:',
        bookingDetails: 'تفاصيل الحجز',
        printBooking: 'طباعة الحجز',
        bookingInvoice: 'فاتورة حجز',
    }
};


// --- دوال مساعدة ---
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
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

function getDailyReceiptId() {
    const today = new Date().toISOString().slice(0, 10);
    const salesToday = state.sales.filter(s => s.createdAt.startsWith(today));
    const nextId = salesToday.length + 1;
    return `${today.replace(/-/g, '')}-${nextId}`;
}

function getProductTotalQuantity(product) {
    if (!product.colors || typeof product.colors !== 'object') return 0;
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
    if (!state.isAdminMode && (state.currentPage === 'inventory-page' || state.currentPage === 'history-page' || state.currentPage === 'customers-page')) {
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

    updateUIText();
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

function renderReceiptTabs() {
    const tabsContainer = document.getElementById('receipt-tabs-container');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';
    state.receipts.forEach((receipt, index) => {
        const tab = document.createElement('div');
        tab.className = `receipt-tab flex items-center ${receipt.id === state.activeReceiptId ? 'active' : ''}`;
        tab.dataset.receiptId = receipt.id;
        tab.innerHTML = `
            <div class="tab-content">
                 <span class="tab-short-text">${index + 1}</span>
                 <span class="tab-full-text">Receipt ${index + 1}</span>
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
                        <input type="tel" class="customer-phone-input w-2/3 p-2 rounded-lg" >
                    </div>
                     <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="customerName">Customer Name</label>
                        <input type="text" class="customer-name-input w-2/3 p-2 rounded-lg" >
                    </div>
                    <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="customerAddress">Customer Address</label>
                        <input type="text" class="customer-address-input w-2/3 p-2 rounded-lg" >
                    </div>
                    <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="colCustomerCity">City</label>
                        <input type="text" class="customer-city-input w-2/3 p-2 rounded-lg">
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

                    <div class="flex justify-between font-bold text-xl" style="color: var(--accent-color);"><span data-lang-key="total">Total:</span><span class="cart-total">0 EGP</span></div>
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

    totalEl.textContent = `${Math.max(0, total).toFixed(2)} EGP`;

    const totalCartItems = state.receipts.reduce((sum, r) => sum + r.cart.reduce((s, i) => s + i.quantity, 0), 0);
    document.getElementById('cart-item-count').textContent = totalCartItems;
}

// --- Booking Functions ---
function renderBookingPage() {
    renderActiveBookingContent();
}

function renderActiveBookingContent() {
    const activeBooking = state.bookings.find(b => b.id === state.activeBookingId);
    const contentContainer = document.getElementById('active-booking-content');
    if (!contentContainer) return;

    if (!activeBooking) {
        contentContainer.innerHTML = `<button id="new-booking-btn" class="btn-primary py-2 px-4 rounded-lg">Create New Booking</button>`;
        updateUIText();
        return;
    }

    const productOptions = state.products
        .filter(p => getProductTotalQuantity(p) > 0)
        .map(p => `<option value="${p.id}">${p.name} (Stock: ${getProductTotalQuantity(p)})</option>`)
        .join('');

    contentContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="booking-content-${activeBooking.id}">
            <div class="md:col-span-2">
                <h2 class="text-2xl font-bold mb-4" data-lang-key="bookingDetails">Booking Details</h2>
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
                    <button class="add-to-cart-btn btn-primary w-full py-2 px-4 rounded-lg" data-target-cart="booking">${translations[state.lang].addToCart}</button>
                </div>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg" style="background-color: var(--secondary-bg);">
                <h2 class="text-2xl font-bold mb-4" data-lang-key="cart">Booking Cart</h2>
                <div class="booking-cart-items space-y-2 max-h-60 overflow-y-auto mb-4"></div>
                <div class="border-t border-gray-300 mt-4 pt-4 space-y-2">
                    <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="customerPhone">Customer Phone</label>
                        <input type="tel" class="customer-phone-input w-2/3 p-2 rounded-lg" value="${activeBooking.customerPhone || ''}">
                    </div>
                     <div class="flex items-center space-x-2">
                        <label class="w-1/3" data-lang-key="customerName">Customer Name</label>
                        <input type="text" class="customer-name-input w-2/3 p-2 rounded-lg" value="${activeBooking.customerName || ''}">
                    </div>
                </div>
                <div class="border-t border-gray-300 mt-4 pt-4 space-y-4">
                    <div class="flex justify-between items-center text-lg"><span data-lang-key="subtotal">Subtotal:</span><span class="cart-subtotal">0 EGP</span></div>
                    <div class="flex items-center space-x-2"><label class="w-1/2" data-lang-key="deposit">Deposit (EGP):</label><input type="number" class="deposit-amount w-1/2 p-2 rounded-lg" min="0" value="${activeBooking.deposit || 0}"></div>
                    <div class="flex justify-between font-bold text-xl" style="color: var(--accent-color);"><span data-lang-key="amountDue">Amount Due:</span><span class="cart-total">0 EGP</span></div>
                    <button class="save-booking-btn btn-secondary w-full mt-4 py-3 px-4 rounded-lg" data-lang-key="saveBooking">Save Booking</button>
                    <button class="complete-sale-btn btn-primary w-full mt-2 py-3 px-4 rounded-lg" data-booking-id="${activeBooking.id}" data-lang-key="completeSale">Complete Sale</button>
                </div>
            </div>
        </div>
    `;

    updateUIText();
    renderBookingCart(activeBooking.id);
}

function renderBookingCart(bookingId) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    const container = document.querySelector(`#booking-content-${bookingId}`);
    if (!container) return;

    const cartItemsContainer = container.querySelector('.booking-cart-items');
    const subtotalEl = container.querySelector('.cart-subtotal');
    const totalEl = container.querySelector('.cart-total');
    const depositEl = container.querySelector('.deposit-amount');

    cartItemsContainer.innerHTML = '';
    let subtotal = booking.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    booking.cart.forEach((item, index) => {
        const product = state.products.find(p => p.id === item.productId);
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'flex justify-between items-center bg-white p-2 rounded';
        cartItemDiv.innerHTML = `
            <div>
                <p class="font-bold">${product ? product.name : 'Unknown Item'} (${item.color} / ${item.size})</p>
                <p class="text-sm text-gray-500">${item.quantity} x ${item.price.toFixed(2)} EGP</p>
            </div>
            <button class="remove-from-cart-btn btn-danger text-lg" data-index="${index}" data-target-cart="booking" data-booking-id="${bookingId}">&times;</button>`;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    subtotalEl.textContent = `${subtotal.toFixed(2)} EGP`;
    const deposit = parseFloat(depositEl.value) || 0;
    let total = subtotal - deposit;
    totalEl.textContent = `${Math.max(0, total).toFixed(2)} EGP`;
}

async function saveBooking() {
    const activeBooking = state.bookings.find(b => b.id === state.activeBookingId);
    if (!activeBooking) return;

    const container = document.getElementById(`booking-content-${activeBooking.id}`);
    activeBooking.customerName = container.querySelector('.customer-name-input').value;
    activeBooking.customerPhone = container.querySelector('.customer-phone-input').value;
    activeBooking.deposit = parseFloat(container.querySelector('.deposit-amount').value) || 0;
    activeBooking.updatedAt = new Date().toISOString();

    await saveData();
    showNotification(translations[state.lang].bookingSaved, 'success');
    renderSalesHistory();
}

function createNewBooking() {
    const newBooking = {
        id: generateUUID(),
        cart: [],
        customerName: '',
        customerPhone: '',
        deposit: 0,
        createdAt: new Date().toISOString()
    };
    state.bookings.push(newBooking);
    state.activeBookingId = newBooking.id;
    renderBookingPage();
}

function closeBooking(bookingId) {
    const index = state.bookings.findIndex(b => b.id === bookingId);
    if (index > -1) {
        state.bookings[index].cart.forEach(item => {
            const product = state.products.find(p => p.id === item.productId);
            if (product && product.colors[item.color] && product.colors[item.color].sizes[item.size]) {
                product.colors[item.color].sizes[item.size].quantity += item.quantity;
            }
        });
        state.bookings.splice(index, 1);
    }

    if (state.activeBookingId === bookingId) {
        state.activeBookingId = null;
    }

    renderBookingPage();
    saveData();
}

function loadBooking(bookingId) {
    state.activeBookingId = bookingId;
    state.currentPage = 'booking-page';
    render();
}

function renderSalesHistory() {
    generateReport();
    renderAllBookings();
}

function renderAllBookings() {
    const container = document.getElementById('open-bookings-list');
    if (!container) return;
    container.innerHTML = '';
    const openBookings = state.bookings.filter(b => !b.isCompleted);

    if (openBookings.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-400 p-4">No open bookings.</p>`;
        return;
    }

    openBookings.forEach(booking => {
        const subtotal = booking.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const amountDue = subtotal - booking.deposit;
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-lg shadow-md flex justify-between items-center';
        card.innerHTML = `
            <div>
                <p class="font-bold text-lg">${booking.customerName || 'No Name'}</p>
                <p class="text-sm text-gray-500">${booking.customerPhone || 'No Phone'}</p>
                <p class="text-sm mt-2">Items: ${booking.cart.length} | Total: ${subtotal.toFixed(2)} EGP</p>
                <p class="text-sm">Deposit: ${booking.deposit.toFixed(2)} EGP | <span class="font-bold">Due: ${amountDue.toFixed(2)} EGP</span></p>
            </div>
            <div class="flex flex-col space-y-2">
                <button class="load-booking-btn btn-primary py-1 px-3 rounded text-xs" data-booking-id="${booking.id}" data-lang-key="loadBooking">Load</button>
                <button class="print-booking-btn btn-secondary py-1 px-3 rounded text-xs" data-booking-id="${booking.id}" data-lang-key="printBooking">Print</button>
            </div>
        `;
        container.appendChild(card);
    });
}


function renderCustomersPage() {
    const tbody = document.getElementById('customers-table').querySelector('tbody');
    const searchTerm = document.getElementById('customer-search').value.toLowerCase();
    const monthFilter = document.getElementById('customer-month-filter').value;

    let filteredCustomers = state.customers;

    if (searchTerm) {
        filteredCustomers = filteredCustomers.filter(c =>
            c.name.toLowerCase().includes(searchTerm) ||
            c.phone.includes(searchTerm)
        );
    }

    if (monthFilter) {
        filteredCustomers = filteredCustomers.filter(c =>
            c.lastPaymentDate && c.lastPaymentDate.startsWith(monthFilter)
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

// --- Event Listeners ---
function setupEventListeners() {
    document.addEventListener('input', (e) => {
        if (e.target.id === 'product-search') renderProductGallery();
        if (e.target.id === 'inventory-search') renderInventoryTable();
        if (e.target.id === 'customer-search' || e.target.id === 'customer-month-filter') renderCustomersPage();

        if (e.target.classList.contains('customer-phone-input')) {
            const phone = e.target.value.trim();
            const parent = e.target.closest('div.grid');
            const nameInput = parent.querySelector('.customer-name-input');
            const addressInput = parent.querySelector('.customer-address-input');
            const cityInput = parent.querySelector('.customer-city-input');
            const customer = state.customers.find(c => c.phone === phone);
            if (customer) {
                nameInput.value = customer.name;
                addressInput.value = customer.address || '';
                cityInput.value = customer.city || '';
            } else {
                nameInput.value = '';
                addressInput.value = '';
                cityInput.value = '';
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

        if (e.target.classList.contains('deposit-amount')) {
            renderBookingCart(state.activeBookingId);
        }
    });


    document.addEventListener('keydown', async (e) => {
        if (e.key === 'Escape') {
            if (!document.getElementById('product-modal').classList.contains('hidden')) closeProductModal();
            else if (!document.getElementById('barcode-modal').classList.contains('hidden')) closeBarcodeModal();
            else if (!document.getElementById('receipt-selection-modal').classList.contains('hidden')) closeReceiptSelectionModal();
            else if (!document.getElementById('return-modal').classList.contains('hidden')) closeReturnModal();
            else if (!document.getElementById('admin-password-modal').classList.contains('hidden')) closeAdminPasswordModal();
            else if (!document.getElementById('category-modal').classList.contains('hidden')) closeCategoryModal();
            else if (!document.getElementById('booking-confirmation-modal').classList.contains('hidden')) closeBookingConfirmationModal();
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
            else if (!document.getElementById('admin-password-modal').classList.contains('hidden')) {
                document.getElementById('admin-password-form').querySelector('button[type="submit"]').click();
                enterHandled = true;
            }
            else if (!document.getElementById('product-modal').classList.contains('hidden')) {
                if (document.activeElement.tagName !== 'BUTTON') {
                    document.getElementById('product-form').querySelector('button[type="submit"]').click();
                    enterHandled = true;
                }
            }
            else if (!document.getElementById('return-modal').classList.contains('hidden')) {
                document.getElementById('confirm-return-btn').click();
                enterHandled = true;
            }
            else if (!document.getElementById('barcode-modal').classList.contains('hidden')) {
                closeBarcodeModal();
                enterHandled = true;
            }
            else if (!document.getElementById('category-modal').classList.contains('hidden')) {
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
                const method = e.key === 'F9' ? 'cash' : 'card';
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
        if (e.target.id === 'cancel-btn') closeProductModal();
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
                    closeBooking(bookingId);
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
                    renderBookingCart(bookingId);
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
            if (e.target.dataset.bookingId) {
                await completeSaleFromBooking(e.target.dataset.bookingId);
            } else {
                await completeSale();
            }
        }

        if (e.target.matches('.return-sale-btn')) showReturnModal(e.target.dataset.saleId);
        if (e.target.matches('.print-receipt-btn')) await printReceipt(e.target.dataset.saleId);
        if (e.target.id === 'delete-selected-btn') await deleteSelectedSales();
        if (e.target.id === 'cancel-return-btn') closeReturnModal();
        if (e.target.id === 'confirm-return-btn') await confirmReturn();
        if (e.target.id === 'export-pdf-btn') await exportReportToPDF();
        if (e.target.id === 'manage-users-btn') window.api.openUsersWindow();
        if (e.target.id === 'export-inventory-btn') await exportInventoryToPDF();
        if (e.target.id === 'calculate-shift-btn') await generateShiftReport();

        if (e.target.classList.contains('remove-image-preview-btn')) {
            e.target.parentElement.remove();
        }

        // Booking specific buttons
        if (e.target.id === 'new-booking-btn') createNewBooking();
        if (e.target.classList.contains('load-booking-btn')) loadBooking(e.target.dataset.bookingId);
        if (e.target.classList.contains('save-booking-btn')) await saveBooking();
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

function createNewReceipt(doRender = true) {
    if (state.receipts.length >= 30) {
        showNotification("Maximum of 30 receipts reached.", "info");
        return;
    }
    const newReceipt = {
        id: generateUUID(),
        cart: [],
        seller: state.currentUser.username,
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
        renderBookingCart(activeBooking.id);

        if (buttonElement) {
            // UI feedback for the button
        }
    }
}

async function completeSaleFromBooking(bookingId) {
    const booking = state.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    // Create a new receipt and make it active
    createNewReceipt(false);
    const newReceipt = state.receipts.find(r => r.id === state.activeReceiptId);

    // Copy data from booking to the new receipt
    newReceipt.cart = JSON.parse(JSON.stringify(booking.cart)); // Deep copy to prevent reference issues

    const container = document.getElementById(`booking-content-${bookingId}`);
    newReceipt.customerName = container.querySelector('.customer-name-input').value;
    newReceipt.customerPhone = container.querySelector('.customer-phone-input').value;

    // Switch to the selling page
    state.currentPage = 'selling-page';

    // Remove the original booking
    const index = state.bookings.findIndex(b => b.id === bookingId);
    if (index > -1) {
        state.bookings.splice(index, 1);
    }
    if (state.activeBookingId === bookingId) {
        state.activeBookingId = null;
    }

    await saveData();
    render(); // Render everything with the new state

    // After rendering, apply the deposit as a discount
    const activeReceiptContent = document.getElementById(`receipt-content-${state.activeReceiptId}`);
    const depositAmount = parseFloat(container.querySelector('.deposit-amount').value) || 0;
    if (activeReceiptContent && depositAmount > 0) {
        activeReceiptContent.querySelector('.discount-amount').value = depositAmount.toFixed(2);
        renderCart(state.activeReceiptId); // Re-render cart to apply discount
    }

    showNotification('Booking loaded to a new receipt for completion.', 'success');
}


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
    const price = product.sellingPrice;

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
        render();

        if (buttonElement) {
            const originalText = buttonElement.textContent;
            buttonElement.classList.add('added');
            buttonElement.textContent = translations[state.lang].addedToCart;
            setTimeout(() => {
                buttonElement.classList.remove('added');
                buttonElement.textContent = originalText;
            }, 1500);
        }

        if (state.currentPage === 'selling-page') {
            if (activeReceiptContent) {
                const productSelection = activeReceiptContent.querySelector('.product-selection');
                if (productSelection) productSelection.value = '';
                handleProductSelectionChange('');
            }
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

    const customerPhone = container.querySelector('.customer-phone-input').value.trim();
    const customerName = container.querySelector('.customer-name-input').value.trim();
    const customerAddress = container.querySelector('.customer-address-input').value.trim();
    const customerCity = container.querySelector('.customer-city-input').value.trim();
    const isFreeDelivery = container.querySelector('#free-delivery-checkbox').checked;
    const deliveryFee = isFreeDelivery ? 0 : parseFloat(container.querySelector('.delivery-fee-input').value) || 0;


    try {
        const subtotal = activeReceipt.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discountPercent = parseFloat(container.querySelector('.discount-percentage').value) || 0;
        const discountAmount = parseFloat(container.querySelector('.discount-amount').value) || 0;
        let finalTotal = subtotal;
        if (discountPercent > 0) finalTotal -= finalTotal * (discountPercent / 100);
        else if (discountAmount > 0) finalTotal -= discountAmount;
        finalTotal = Math.max(0, finalTotal) + deliveryFee;

        const paidAmount = parseFloat(container.querySelector('.paid-amount').value);
        if (isNaN(paidAmount) || paidAmount < 0) {
            showNotification("Invalid paid amount.", "error");
            return;
        }

        const paymentMethod = container.querySelector('.payment-method-btn.selected').dataset.method;

        const newSale = {
            id: getDailyReceiptId(),
            cashier: activeReceipt.seller || (state.currentUser ? state.currentUser.username : 'N/A'),
            createdAt: new Date().toISOString(),
            totalAmount: finalTotal,
            paidAmount,
            profit: activeReceipt.cart.reduce((sum, item) => sum + (item.price - item.purchasePrice) * item.quantity, 0) - (subtotal - finalTotal + deliveryFee),
            discountAmount: subtotal - finalTotal + deliveryFee,
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
        let displayChangeAmount = (sale.paidAmount - sale.totalAmount).toFixed(2);

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

        template = template.replace('{{saleDate}}', new Date(sale.createdAt).toLocaleString())
            .replace('{{saleId}}', sale.id)
            .replace('{{username}}', sale.cashier || 'N/A')
            .replace('{{customerInfo}}', customerInfoHtml)
            .replace('{{itemsHtml}}', itemsHtml)
            .replace('{{returnsSection}}', returnsSectionHtml)
            .replace('{{subtotal}}', sale.subtotal.toFixed(2))
            .replace('{{discountAmount}}', sale.discountAmount.toFixed(2))
            .replace('{{totalReturns}}', totalReturnsValue.toFixed(2))
            .replace('{{finalTotal}}', sale.totalAmount.toFixed(2))
            .replace('{{paidAmount}}', displayPaidAmount)
            .replace('{{changeAmount}}', displayChangeAmount)
            .replace('{{logoSrc}}', logoBase64 || '');

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
    let totalCardSales = 0;

    salesData.forEach(sale => {
        const cashier = sale.cashier || 'Unknown';
        if (!cashierSales[cashier]) {
            cashierSales[cashier] = { revenue: 0, profit: 0 };
        }
        cashierSales[cashier].revenue += sale.totalAmount;
        cashierSales[cashier].profit += sale.profit;

        if (sale.paymentMethod === 'cash') {
            totalCashSales += sale.totalAmount;
        } else if (sale.paymentMethod === 'card') {
            totalCardSales += sale.totalAmount;
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
    doc.text("Your Store", 28, 20);
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
    doc.text(`Total Card Sales: ${totalCardSales.toFixed(2)} EGP`, 14, summaryY); summaryY += 5;
    doc.text(`Total Items Sold: ${totalItemsSold}`, 14, summaryY); summaryY += 5;
    doc.text(`Number of Returns: ${totalReturnsCount}`, 14, summaryY); summaryY += 5;
    doc.text(`Total Value of Returns: ${totalReturnsValue.toFixed(2)} EGP`, 14, summaryY); summaryY += 10;

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

async function generateShiftReport() {
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

    let totalRevenue = 0, totalProfit = 0, totalItemsSold = 0, totalItemsReturned = 0, totalReturnsValue = 0, totalCashSales = 0, totalCardSales = 0;

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
            } else if (sale.paymentMethod === 'card') {
                totalCardSales += sale.totalAmount;
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
            saleCard.className = `bg-gray-800 p-4 rounded-lg flex items-start space-x-4 ${isSelected ? 'sale-card-selected' : ''}`;
            const canReturn = saleItems.some(item => (item.quantity - (item.returnedQty || 0)) > 0);
            const deliveryInfo = sale.isFreeDelivery ? '<span class="text-green-400 font-bold">Free Delivery</span>' : (sale.deliveryFee > 0 ? `Delivery Fee: ${sale.deliveryFee.toFixed(2)} EGP` : '');

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
                        <p class="font-bold">Total: ${sale.totalAmount.toFixed(2)} EGP (${sale.paymentMethod})</p>
                    </div>
                </div>`;
            historyList.appendChild(saleCard);
        });
    }

    document.getElementById('total-revenue').textContent = `${totalRevenue.toFixed(2)} EGP`;
    document.getElementById('total-profit').textContent = `${totalProfit.toFixed(2)} EGP`;
    document.getElementById('total-cash-sales').textContent = `${totalCashSales.toFixed(2)} EGP`;
    document.getElementById('total-card-sales').textContent = `${totalCardSales.toFixed(2)} EGP`;
    document.getElementById('total-items-sold').textContent = totalItemsSold;
    document.getElementById('total-items-returned').textContent = totalItemsReturned;
    document.getElementById('total-returns-value').textContent = `${totalReturnsValue.toFixed(2)} EGP`;

    document.getElementById('selection-controls').classList.toggle('hidden', filteredSales.length === 0);
    document.getElementById('select-all-checkbox').checked = false;
}

function exportCustomersToExcel() {
    const searchTerm = document.getElementById('customer-search').value.toLowerCase();
    const monthFilter = document.getElementById('customer-month-filter').value;
    let filteredCustomers = state.customers;

    if (searchTerm) {
        filteredCustomers = filteredCustomers.filter(c =>
            c.name.toLowerCase().includes(searchTerm) ||
            c.phone.includes(searchTerm)
        );
    }

    if (monthFilter) {
        filteredCustomers = filteredCustomers.filter(c =>
            c.lastPaymentDate && c.lastPaymentDate.startsWith(monthFilter)
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

async function exportInventoryToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape' });
    const receiptData = await window.api.loadReceiptTemplate();
    const logoBase64 = receiptData.logoBase64;

    showNotification('Generating inventory report, please wait...', 'info');

    await new Promise(resolve => setTimeout(resolve, 50));

    if (logoBase64) doc.addImage(logoBase64, 'PNG', 14, 12, 12, 12);
    doc.setFontSize(14);
    doc.text("Your Store", 28, 20);
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
        headStyles: { fillColor: [45, 55, 72], font: 'helvetica' },
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

function showProductModal(product = null) {
    state.editingProductId = product ? product.id : null;
    const modal = document.getElementById('product-modal');
    // ... function content to create and show the modal
    modal.classList.remove('hidden');
}

function showCategoryModal() {
    const modal = document.getElementById('category-modal');
    // ... function content to create and show the modal
    modal.classList.remove('hidden');
}

function showBarcodeModal(productId) {
    const modal = document.getElementById('barcode-modal');
    // ... function content to create and show the modal
    modal.classList.remove('hidden');
}

function showReturnModal(saleId) {
    const modal = document.getElementById('return-modal');
    // ... function content to create and show the modal
    modal.classList.remove('hidden');
}

function showReceiptSelectionModal(itemData) {
    const modal = document.getElementById('receipt-selection-modal');
    // ... function content to create and show the modal
    modal.classList.remove('hidden');
}


function closeProductModal() { document.getElementById('product-modal').classList.add('hidden'); }
function closeBarcodeModal() { document.getElementById('barcode-modal').classList.add('hidden'); }
function closeReceiptSelectionModal() { document.getElementById('receipt-selection-modal').classList.add('hidden'); }
function closeReturnModal() { document.getElementById('return-modal').classList.add('hidden'); }
function closeCategoryModal() { document.getElementById('category-modal').classList.add('hidden'); }


// --- INITIALIZATION ---
async function init() {
    window.api.onSetUser((user) => {
        state.currentUser = user;
        loadAndRenderApp();
    });
}

async function loadAndRenderApp() {
    const data = await window.api.loadData();
    if (data && !data.error) {
        state.products = data.products || [];
        state.sales = data.sales || [];
        state.users = data.users || [];
        state.categories = ['All', ...(data.categories || [])].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
        state.customers = data.customers || [];
        state.bookings = data.bookings || []; // Load bookings
    } else {
        console.error("Failed to load data:", data?.error);
        showNotification("CRITICAL: Failed to load database.", 'error');
    }

    state.lastShiftReportTime = await window.api.getLastShiftTime();

    cartSession.load();
    if (!window.listenersAttached) {
        setupEventListeners();
        window.listenersAttached = true;
    }
    populateUserFilter();
    render();
}

init();
