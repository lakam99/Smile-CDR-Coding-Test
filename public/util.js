function convertTypeToHTMLType (type) {
    if (type == 'boolean') return 'radio';
    if (type == 'choice') return 'checkbox';
    if (type == 'string') return 'text';
    return type;
}