#!/usr/bin/env python3
"""
Script para eliminar especificadores de versión de los imports en archivos TypeScript/TSX
Uso: python fix-imports.py
"""

import os
import re
from pathlib import Path

def fix_imports_in_file(file_path):
    """Remove version specifiers from imports in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match: from "package@version" or from 'package@version'
        # Replace with: from "package" or from 'package'
        pattern = r'from\s+(["\'])([^"\']+)@[\d.]+\1'
        replacement = r'from \1\2\1'
        
        content = re.sub(pattern, replacement, content)
        
        # Also fix: import ... from "package@version"
        pattern2 = r'import\s+(.*?)\s+from\s+(["\'])([^"\']+)@[\d.]+\2'
        replacement2 = r'import \1 from \2\3\2'
        
        content = re.sub(pattern2, replacement2, content)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TSX/TS files"""
    root_dir = Path('.')
    
    # Find all .tsx and .ts files
    tsx_files = list(root_dir.rglob('*.tsx'))
    ts_files = list(root_dir.rglob('*.ts'))
    
    all_files = tsx_files + ts_files
    
    # Exclude node_modules and dist
    all_files = [f for f in all_files if 'node_modules' not in str(f) and 'dist' not in str(f)]
    
    print(f"🔍 Found {len(all_files)} files to check")
    print("=" * 50)
    
    fixed_count = 0
    for file_path in all_files:
        if fix_imports_in_file(file_path):
            fixed_count += 1
    
    print("=" * 50)
    print(f"✨ Done! Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
