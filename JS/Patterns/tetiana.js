class SignedDocument {
  constructor(content, signed) {
    this.content = content;
    this.signed = signed;
  }
}

class PrivateSignedDocument extends SignedDocument {
  constructor(content, signed, isPrivate) {
    super(content, signed);
    this.isPrivate = isPrivate;
  }
}

class MultiPersonsSignedDocument extends SignedDocument {
  constructor(content, signed, signers) {
    super(content, signed);
    this.signers = signers;
  }
}

// 2. Описати конструктор фабрики за шаблоном

// Якщо документ не приватний і не має signers - SignedDocument
// Якщо документ приватний і не має signers - PrivateSignedDocument
// Якщо документ має signers - MultiPersonsSignedDocument

const documentData = {
  content: '',
  signed: true,
  isPrivate: false,
  signers: [],
};

class DocumentsFabric {
  static newDocuments = {
    SignedDocument: [],
    PrivateSignedDocument: [],
    MultiPersonsSignedDocument: [],
  };

  constructor(documentData) {
    const { content, signed, isPrivate, signers } = documentData;

    if (!isPrivate && signers.length === 0) {
      const newSignedDocument = new SignedDocument(content, signed);
      DocumentsFabric.newDocuments.SignedDocument.push(newSignedDocument);

      return newSignedDocument;
    }

    if (isPrivate === true && signers.length === 0) {
      const newPrivateSignedDocument = new PrivateSignedDocument(
        content,
        signed,
        isPrivate
      );
      DocumentsFabric.newDocuments.PrivateSignedDocument.push(
        newPrivateSignedDocument
      );

      return newPrivateSignedDocument;
    }

    if (signers.length > 0) {
      const newMultiPersonalSignedDocument = new MultiPersonsSignedDocument(
        content,
        signed,
        signers
      );

      DocumentsFabric.newDocuments.MultiPersonsSignedDocument.push(
        newMultiPersonalSignedDocument
      );

      return newMultiPersonalSignedDocument;
    }
  }
}

const doc1 = new DocumentsFabric({
  content: 'smth',
  signed: true,
  isPrivate: false,
  signers: [],
});

console.log(doc1, 'doc1');

const doc2 = new DocumentsFabric({
  content: 'smth',
  signed: true,
  isPrivate: true,
  signers: [],
});

console.log(doc2, 'doc2');

const doc3 = new DocumentsFabric({
  content: 'smth',
  signed: true,
  isPrivate: false,
  signers: ['signer1', 'signer2'],
});

console.log(doc3, 'doc3');

console.log(DocumentsFabric.newDocuments, '!!!');
